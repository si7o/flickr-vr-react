const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const srcDir = path.resolve("src");
process.env.NODE_ENV = "development";

module.exports = (env) => ({
  mode: "production",
  target: "web",
  entry: "./src/index",
  output: {
    filename: "app.[contenthash].js",
    chunkFilename: "app.vendors.[contenthash].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
    new webpack.DefinePlugin({
      "process.env.BASEPATH": env.basepath ?? "'/'",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".js", ".jsx", ".react.js", ".ico"],
    alias: {
      components: path.join(srcDir, "components"),
      styles: path.join(srcDir, "styles"),
      services: path.join(srcDir, "services"),
      pages: path.join(srcDir, "pages"),
      helpers: path.join(srcDir, "helpers"),
    },
  },
});
