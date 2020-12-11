const path = require("path");

module.exports = {
  entry: "./src/app.tsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.tsx?/,
        exclude: /node_modules/,
      },
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
