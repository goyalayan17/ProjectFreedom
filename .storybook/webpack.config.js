const path = require('path');

module.exports = ({ config, mode }) => {
      mode = 'development';
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, '../src')],
        loader: require.resolve('ts-loader')
    });

    config.resolve.extensions.push('.ts', '.tsx');

    config.resolve.modules = [...(config.resolve.modules || []), path.resolve('./')];

    return config;
};