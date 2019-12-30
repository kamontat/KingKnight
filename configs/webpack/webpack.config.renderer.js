const merge = require('webpack-merge');

const base = require("./webpack.config.base")

module.exports = merge.smart(base, {
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }],
    }]
  },
})