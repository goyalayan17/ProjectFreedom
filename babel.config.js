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
    test: {
      presets: [
        ['@babel/preset-env', {
          targets: {
            browsers: ['last 2 versions', 'not IE <= 10'],
            node: 'current'
          }
        }],
        ['@babel/preset-react', {
          runtime: 'automatic'
        }]
      ],
      plugins: ['@babel/plugin-proposal-class-properties', 'transform-es2015-modules-commonjs']

    },
    development: {
      plugins: [['@emotion', { sourceMap: true }]]
    }
  }
};