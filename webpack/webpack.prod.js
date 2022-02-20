const common = require("./webpack.common")();
const webpack = require("webpack");
const { WebpackManifestPlugin: webpackManifestPlugin } = require("webpack-manifest-plugin");
const terserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = () => {
  return merge(common, {
    mode: "production",

    plugins: [
      //
      new webpack.CleanPlugin(),
      new webpackManifestPlugin(),
    ],

    optimization: {
      minimizer: [
        new terserPlugin({
          extractComments: false,
          terserOptions: {
            compress: {
              drop_console: true,
            },
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
  });
};
