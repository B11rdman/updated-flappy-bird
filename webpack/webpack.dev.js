const common = require("./webpack.common")();
const { merge } = require("webpack-merge");
const forkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = () => {
  return merge(common, {
    mode: "development",

    plugins: [
      new forkTsCheckerWebpackPlugin({
        eslint: { enabled: true, files: "./src/**/*.{ts,js}" },
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
        },
      }),
    ],
  });
};
