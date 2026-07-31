export async function persistArtworkImage(sourceUri: string): Promise<string> {
  const { Directory, File, Paths } = await import('expo-file-system');
  const directory = new Directory(Paths.document, 'artwork-images');
  if (!directory.exists) directory.create();

  const extension = getSafeExtension(sourceUri);
  const destination = new File(directory, `artwork-${Date.now()}${extension}`);
  const source = new File(sourceUri);
  source.copy(destination);
  return destination.uri;
}

function getSafeExtension(uri: string): string {
  const match = uri.toLowerCase().match(/\.(jpg|jpeg|png|webp|heic)$/);
  return match ? match[0] : '.jpg';
}
