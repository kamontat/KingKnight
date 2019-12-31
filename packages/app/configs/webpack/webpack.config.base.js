const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  module: {
    rules: [{
        test: /\.node$/,
        use: "node-loader",
      },
      {
        test: /\.(m?js|node)$/,
        parser: {
          amd: false,
        },
        use: {
          loader: "@marshallofsound/webpack-asset-relocator-loader",
          options: {
            outputAssetBase: "native_modules",
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|.webpack)/,
        loaders: [{
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        }, ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};