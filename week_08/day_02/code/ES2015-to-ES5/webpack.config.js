// What is Webpack?
//  Build Tool - Automates tasks for us
//  Bundler - Joins files together
//
// What concepts are there?
//
// Entry
//   Where does your application begin?

const config = {
  entry: ["./src/js/app.js"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  }
};

module.exports = config;
