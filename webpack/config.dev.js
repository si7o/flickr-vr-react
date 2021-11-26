const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const srcDir = path.resolve("src");
process.env.NODE_ENV = "development";

module.exports = (env) => ({
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    liveReload: true,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
    new webpack.DefinePlugin({
      "process.env.BASEPATH": JSON.stringify(env.basepath || ""),
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
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        type: "asset/inline",
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
      utils: path.join(srcDir, "utils"),
    },
  },
});
