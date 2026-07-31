require('./register-typescript.cjs');

const assert = require('node:assert/strict');
const test = require('node:test');

const { MockAuthGateway } = require('../src/features/account/infrastructure/MockAuthGateway.ts');
const {
  MockAdministrationGateway,
} = require('../src/features/administration/infrastructure/MockAdministrationGateway.ts');
const {
  MockContactGateway,
} = require('../src/features/contact/infrastructure/MockContactGateway.ts');
const {
  CurrentDataDiscoveryGateway,
} = require('../src/features/discovery/infrastructure/CurrentDataDiscoveryGateway.ts');
const {
  MockPortfolioGateway,
} = require('../src/features/portfolio/infrastructure/MockPortfolioGateway.ts');
const { profileGateway } = require('../src/features/profile/infrastructure/profileGateway.ts');

test('authentication errors do not reveal whether an account exists', async () => {
  const gateway = new MockAuthGateway();
  const attempts = [
    gateway.signIn({ email: 'missing@example.com', password: 'Incorrect1!' }),
    gateway.signIn({ email: 'artista@habittus.local', password: 'Incorrect1!' }),
  ];
  const messages = [];
  for (const attempt of attempts) {
    await assert.rejects(attempt, (error) => {
      messages.push(error.message);
      return true;
    });
  }
  assert.equal(messages[0], messages[1]);
});

test('private contact email is redacted and forged recipients are rejected', async () => {
  const gateway = new MockContactGateway();
  const preferences = await gateway.getPublicPreferences('seed-mateo');
  assert.equal(preferences.professionalEmail, '');
  await assert.rejects(
    gateway.submitRequest({
      profileId: 'profile-lucia-ferrer',
      artistUserId: 'seed-mateo',
      senderName: 'Persona visitante',
      senderEmail: 'visitor@example.com',
      subject: 'Propuesta profesional',
      message: 'Este mensaje profesional supera el mínimo requerido.',
      reason: 'collaboration',
    }),
  );
});

test('artists cannot clear an administrative profile restriction by saving', async () => {
  await profileGateway.setModeration('profile-lucia-ferrer', 'hidden', 'Revisión administrativa');
  const profile = await profileGateway.getProfile('seed-lucia');
  const saved = await profileGateway.saveProfile('seed-lucia', {
    ...profile,
    moderationStatus: 'active',
    moderationReason: '',
  });
  assert.equal(saved.moderationStatus, 'hidden');
});

test('suspended artists and their works disappear from all public discovery paths', async () => {
  const administration = new MockAdministrationGateway();
  const discovery = new CurrentDataDiscoveryGateway();
  await administration.setUserStatus('seed-mateo', 'suspended', 'Incumplimiento verificado');
  const results = await discovery.search({
    query: '',
    discipline: '',
    category: '',
    technique: '',
    location: '',
  });
  assert.equal(
    results.profiles.some((profile) => profile.ownerUserId === 'seed-mateo'),
    false,
  );
  assert.equal(
    results.artworks.some((artwork) => artwork.ownerUserId === 'seed-mateo'),
    false,
  );
  assert.equal(await discovery.getPublicProfile('profile-mateo-rivas'), null);
  assert.equal(await discovery.getPublicArtwork('artwork-estrato'), null);
});

test('public discovery projections never expose moderation metadata', async () => {
  const discovery = new CurrentDataDiscoveryGateway();
  const results = await discovery.search({
    query: '',
    discipline: '',
    category: '',
    technique: '',
    location: '',
  });
  for (const entity of [...results.profiles, ...results.artworks]) {
    assert.equal('moderationStatus' in entity, false);
    assert.equal('moderationReason' in entity, false);
  }
});

test('saved artworks survive a gateway restart through persistence', async () => {
  let stored = null;
  const persistence = {
    async load() {
      return stored;
    },
    async save(portfolios) {
      stored = structuredClone(portfolios);
    },
  };
  const firstGateway = new MockPortfolioGateway(persistence);
  const saved = await firstGateway.saveArtwork('artist-persistence-test', {
    title: 'Obra persistente',
    description: 'Esta obra debe continuar disponible después de reiniciar el gateway.',
    category: 'Pintura',
    technique: 'Óleo',
    year: '2026',
    availability: 'available',
    imageUrl: 'file:///habittus/artwork-images/obra-persistente.jpg',
    publicationStatus: 'draft',
  });

  const restartedGateway = new MockPortfolioGateway(persistence);
  const restored = await restartedGateway.getArtwork('artist-persistence-test', saved.id);
  assert.equal(restored?.title, 'Obra persistente');
  assert.equal(restored?.imageUrl, saved.imageUrl);
});
