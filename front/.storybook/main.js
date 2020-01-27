module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};


// for typescript config
// ref: https://storybook.js.org/docs/configurations/typescript-config/
module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
