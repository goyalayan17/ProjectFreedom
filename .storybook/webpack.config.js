const path = require('path');

module.exports = ({ config })=>{
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include:[path.resolve(__dirname, '../src')],
        loader: require.resolve('ts-loader')
    });
    
    return config;
};