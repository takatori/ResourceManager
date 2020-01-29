module.exports = {
    stories: ['../src/components/**/*.stories.tsx'],
    addons: ['@storybook/preset-create-react-app'],

    // for typescript config
    // ref: https://storybook.js.org/docs/configurations/typescript-config/
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { flow: false, typescript: true }]],
            },
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
