# Steps to create this app

- `npm init`
- `npm install --save-dev webpack webpack-cli webpack-dev-server @babel/core @babel/preset-env babel-loader`
- `mkdir -p src/js`
- `touch src/js/app.js webpack.config.js .babelrc`

## Fill in the details with in `webpack.config.js`

```js
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
```

## Fill in your `.babelrc`

```raw
{
  "presets": ["@babel/env"]
}
```
