module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        shippedProposals: true,
        modules: false,
        targets: {
          browsers: ['last 2 versions', 'not IE <= 10'],
          node: 'current'
        }
      }
    ]
    ,
    "@babel/react",
    "@emotion/babel-preset-css-prop"
  ],
  env: {
    development: {
      plugins: [['@emotion', { sourceMap: true }]]
    }
  }
};