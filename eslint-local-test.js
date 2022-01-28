var baseConfig = require('./eslintrc.js');

baseConfig.rules ={
    'local-rules/no-public-api-references': ['error']
};

baseConfig.extends=[];
baseConfig.parserOptions.extraFileExtensions=['.json'];

module.exports = baseConfig;