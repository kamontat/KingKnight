const merge = require('webpack-merge');
// const nodeExternals = require('webpack-node-externals');

const base = require("./webpack.config.base")

module.exports = merge.smart(base, {
  entry: "./src/main.ts",
  target: 'node',
  externals: [
    "electron"
    // nodeExternals(),
  ],
})