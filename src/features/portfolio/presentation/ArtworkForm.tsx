import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { type ArtworkErrors, validateArtwork } from '@/features/portfolio/application/validation';
import type { ArtworkDraft } from '@/features/portfolio/domain/artwork';
import { persistArtworkImage } from '@/features/portfolio/infrastructure/artworkImageStorage';
import { AvailabilitySelector } from '@/shared/components/AvailabilitySelector';
import { FormField } from '@/shared/components/FormField';
import { SubmitButton } from '@/shared/components/SubmitButton';
import { colors, spacing } from '@/shared/theme/tokens';

export function ArtworkForm({
  initialValue,
  onSave,
}: {
  initialValue: ArtworkDraft;
  onSave(draft: ArtworkDraft): Promise<void>;
}) {
  const [draft, setDraft] = useState(initialValue);
  const [errors, setErrors] = useState<ArtworkErrors>({});
  const [status, setStatus] = useState<'idle' | 'saving' | 'error'>('idle');
  const [imageStatus, setImageStatus] = useState<'idle' | 'loading'>('idle');

  useEffect(() => setDraft(initialValue), [initialValue]);

  const save = async () => {
    const nextErrors = validateArtwork(draft);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('saving');
    try {
      await onSave(draft);
    } catch {
      setStatus('error');
    }
  };

  const applyPickedImage = async (uri: string) => {
    setImageStatus('loading');
    try {
      const imageUrl = await persistArtworkImage(uri);
      setDraft((current) => ({ ...current, imageUrl }));
      setErrors((current) => ({ ...current, imageUrl: undefined }));
    } catch {
      Alert.alert('No se pudo guardar la imagen', 'Intentá nuevamente con otra fotografía.');
    } finally {
      setImageStatus('idle');
    }
  };

  const chooseFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 0.85,
    });
    const selectedAsset = result.assets?.[0];
    if (!result.canceled && selectedAsset) await applyPickedImage(selectedAsset.uri);
  };

  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert(
        'Permiso de cámara necesario',
        'Habilitá la cámara para fotografiar una obra directamente desde HABITTUS.',
      );
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 0.85,
    });
    const capturedAsset = result.assets?.[0];
    if (!result.canceled && capturedAsset) await applyPickedImage(capturedAsset.uri);
  };

  return (
    <View style={styles.form}>
      {status === 'error' ? (
        <Text accessibilityRole="alert" style={styles.error}>
          No fue posible guardar la obra. Intentá nuevamente.
        </Text>
      ) : null}
      <FormField
        error={errors.title}
        label="Título"
        onChangeText={(title) => setDraft((current) => ({ ...current, title }))}
        value={draft.title}
      />
      <FormField
        error={errors.description}
        label="Descripción"
        multiline
        onChangeText={(description) => setDraft((current) => ({ ...current, description }))}
        value={draft.description}
      />
      <FormField
        error={errors.category}
        label="Categoría"
        onChangeText={(category) => setDraft((current) => ({ ...current, category }))}
        value={draft.category}
      />
      <FormField
        error={errors.technique}
        label="Técnica"
        onChangeText={(technique) => setDraft((current) => ({ ...current, technique }))}
        value={draft.technique}
      />
      <FormField
        error={errors.year}
        inputMode="numeric"
        label="Año"
        maxLength={4}
        onChangeText={(year) => setDraft((current) => ({ ...current, year }))}
        value={draft.year}
      />
      <View style={styles.imageSection}>
        <Text style={styles.imageLabel}>Imagen de la obra</Text>
        {draft.imageUrl ? (
          <Image
            accessibilityLabel="Vista previa de la obra"
            source={{ uri: draft.imageUrl }}
            style={styles.imagePreview}
          />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>Todavía no seleccionaste una imagen</Text>
          </View>
        )}
        {errors.imageUrl ? (
          <Text accessibilityRole="alert" style={styles.fieldError}>
            {errors.imageUrl}
          </Text>
        ) : null}
        <View style={styles.imageActions}>
          <Pressable
            accessibilityRole="button"
            disabled={imageStatus === 'loading'}
            onPress={takePhoto}
            style={styles.imageButton}
          >
            <Text style={styles.imageButtonText}>Usar cámara</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            disabled={imageStatus === 'loading'}
            onPress={chooseFromGallery}
            style={styles.imageButton}
          >
            <Text style={styles.imageButtonText}>Elegir de galería</Text>
          </Pressable>
        </View>
        {draft.imageUrl ? (
          <Pressable
            accessibilityRole="button"
            onPress={() => setDraft((current) => ({ ...current, imageUrl: '' }))}
          >
            <Text style={styles.removeImage}>Quitar imagen</Text>
          </Pressable>
        ) : null}
      </View>
      <AvailabilitySelector
        disabled={status === 'saving'}
        onChange={(availability) => setDraft((current) => ({ ...current, availability }))}
        value={draft.availability}
      />
      <SubmitButton isLoading={status === 'saving'} label="Guardar obra" onPress={save} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { gap: spacing.md, marginTop: spacing.xl },
  error: { backgroundColor: '#F7E7E5', color: '#8D2F28', padding: spacing.md },
  imageSection: { gap: spacing.sm },
  imageLabel: { color: colors.text, fontSize: 15, fontWeight: '600' },
  imagePreview: { width: '100%', aspectRatio: 4 / 3, borderRadius: 16 },
  imagePlaceholder: {
    aspectRatio: 4 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.border,
    borderRadius: 16,
    borderStyle: 'dashed',
    borderWidth: 1,
    backgroundColor: colors.background,
  },
  imagePlaceholderText: { color: colors.textMuted, fontSize: 14 },
  imageActions: { flexDirection: 'row', gap: spacing.sm },
  imageButton: {
    flex: 1,
    alignItems: 'center',
    borderColor: colors.action,
    borderRadius: 12,
    borderWidth: 1,
    padding: spacing.md,
  },
  imageButtonText: { color: colors.action, fontSize: 14, fontWeight: '700' },
  removeImage: { color: '#8D2F28', fontSize: 14, fontWeight: '600' },
  fieldError: { color: '#8D2F28', fontSize: 13 },
});
