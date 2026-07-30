import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

import { emptyArtworkDraft, type ArtworkDraft } from '@/features/portfolio/domain/artwork';
import { ArtworkForm } from '@/features/portfolio/presentation/ArtworkForm';
import { usePortfolio } from '@/features/portfolio/presentation/PortfolioProvider';
import { LoadingScreen } from '@/shared/components/LoadingScreen';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';

export default function ArtworkEditorScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { getArtwork, saveArtwork } = usePortfolio();
  const [initialValue, setInitialValue] = useState<ArtworkDraft>(emptyArtworkDraft);
  const [isLoading, setIsLoading] = useState(Boolean(id));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    let active = true;
    setIsLoading(true);
    getArtwork(id)
      .then((artwork) => {
        if (!active) return;
        if (!artwork) {
          setError('La obra solicitada no existe.');
          return;
        }
        setInitialValue({
          title: artwork.title,
          description: artwork.description,
          category: artwork.category,
          technique: artwork.technique,
          year: artwork.year,
          availability: artwork.availability,
          imageUrl: artwork.imageUrl,
          publicationStatus: artwork.publicationStatus,
        });
      })
      .catch(() => active && setError('No fue posible cargar la obra.'))
      .finally(() => active && setIsLoading(false));
    return () => {
      active = false;
    };
  }, [getArtwork, id]);

  if (isLoading) return <LoadingScreen label="Cargando obra" />;

  return (
    <PlaceholderScreen
      description={error ?? 'Completá la información contextual de la obra.'}
      title={id ? 'Editar obra' : 'Agregar obra'}
    >
      {!error ? (
        <ArtworkForm
          initialValue={initialValue}
          onSave={async (draft) => {
            await saveArtwork(draft, id);
            router.replace({ pathname: '/(professional)/portfolio', params: { saved: '1' } });
          }}
        />
      ) : null}
    </PlaceholderScreen>
  );
}
