const baseConfig = require('./app.json').expo;

module.exports = () => {
  const projectId = process.env.EAS_PROJECT_ID;
  const owner = process.env.EXPO_OWNER;

  return {
    ...baseConfig,
    ...(owner ? { owner } : {}),
    extra: {
      ...baseConfig.extra,
      ...(projectId ? { eas: { projectId } } : {}),
    },
  };
};
