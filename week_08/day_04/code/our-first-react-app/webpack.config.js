// Entry Point
// Rules || Loaders
// Output

const config = {
  entry: ["./src/js/app.js"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: "/"
  },
  devServer: {
    contentBase: "./dist"
  }
};

module.exports = config;
