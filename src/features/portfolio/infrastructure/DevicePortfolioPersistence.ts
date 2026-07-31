import type {
  PortfolioPersistence,
  SerializedPortfolios,
} from '@/features/portfolio/infrastructure/PortfolioPersistence';

const STORAGE_FILE = 'habittus-portfolios.json';

export class DevicePortfolioPersistence implements PortfolioPersistence {
  async load(): Promise<SerializedPortfolios | null> {
    if (typeof window === 'undefined') return null;

    const { File, Paths } = await import('expo-file-system');
    const file = new File(Paths.document, STORAGE_FILE);
    if (!file.exists) return null;

    const content = await file.text();
    const parsed: unknown = JSON.parse(content);
    if (!isSerializedPortfolios(parsed)) {
      throw new Error('Invalid portfolio storage.');
    }
    return parsed;
  }

  async save(portfolios: SerializedPortfolios): Promise<void> {
    if (typeof window === 'undefined') return;

    const { File, Paths } = await import('expo-file-system');
    const file = new File(Paths.document, STORAGE_FILE);
    if (!file.exists) file.create();
    file.write(JSON.stringify(portfolios));
  }
}

function isSerializedPortfolios(value: unknown): value is SerializedPortfolios {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  return Object.values(value).every(
    (artworks) =>
      Array.isArray(artworks) &&
      artworks.every(
        (artwork) =>
          artwork &&
          typeof artwork === 'object' &&
          'id' in artwork &&
          typeof artwork.id === 'string' &&
          'ownerUserId' in artwork &&
          typeof artwork.ownerUserId === 'string',
      ),
  );
}
