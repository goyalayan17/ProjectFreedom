module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        shippedProposals: true,
        modules: false,
        targets: {
          node: 'current'
        }
      }
    ]
    ,
    "@babel/react",
    "@emotion/babel-preset-css-prop"
  ],
  env:{
    development: { 
      plugins:[['@emotion',{sourceMap: true}]]
    }
  }
};