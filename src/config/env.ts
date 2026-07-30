type AppEnvironment = 'development' | 'preview' | 'production';

const appEnvironment = process.env.EXPO_PUBLIC_APP_ENV ?? 'development';
const apiBaseUrl = process.env.EXPO_PUBLIC_API_BASE_URL ?? 'http://localhost:3000/v1';

if (!['development', 'preview', 'production'].includes(appEnvironment)) {
  throw new Error('EXPO_PUBLIC_APP_ENV must be development, preview, or production.');
}

export const env = Object.freeze({
  appEnvironment: appEnvironment as AppEnvironment,
  apiBaseUrl,
});
