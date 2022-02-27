const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyPlugin = require("copy-webpack-plugin");

// prettier-ignore
const PATHS = {
    html:    path.resolve("html", "index.html"),
    index: path.resolve("src", "index.ts"),
    dist:    path.resolve("dist"),
};

module.exports = () => {
  return {
    entry: {
      app: {
        import: [PATHS.index],
        dependOn: "modules",
      },
      modules: ["phaser"],
    },

    output: {
      publicPath: "",
      path: PATHS.dist,
      filename: "[name].[contenthash].js",
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },

    plugins: [
      new htmlWebpackPlugin({
        title: "Flappy bird implementation by Birdman",
        template: PATHS.html,
      }),
      new copyPlugin({
        patterns: [{ from: path.resolve("assets"), to: path.resolve("dist/assets") }],
      }),
    ],
    module: {
      rules: [
        {
          // Include ts, tsx, js, and jsx files.
          test: /\.(ts|js)x?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
            },
          },
        },
      ],
    },
  };
};
