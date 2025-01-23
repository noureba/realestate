// eslint-disable-next-line no-undef
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// eslint-disable-next-line no-undef
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
        template:"./src/index.html",
        filename:"index.html",
    })
  ]
};
