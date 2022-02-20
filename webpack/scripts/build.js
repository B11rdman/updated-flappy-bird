const config = require("../webpack.prod");
const webpack = require("webpack");

webpack(config(), (err) => {
  console.error(err);
});
