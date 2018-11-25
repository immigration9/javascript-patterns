const path = require('path');

const config = [{
  mode: 'production',
  context: path.resolve(__dirname, 'src/Mediator'), 
  entry: {
    main: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mediator.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules)/],
        loader: "babel-loader"
      }
    ]
  }
}, {
  mode: 'production',
  context: path.resolve(__dirname, 'src/Observer'), 
  entry: {
    main: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'observer.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules)/],
        loader: "babel-loader"
      }
    ]
  }
}, {
  mode: 'production',
  context: path.resolve(__dirname, 'src/ObserverController'), 
  entry: {
    main: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'observer-controller.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules)/],
        loader: "babel-loader"
      }
    ]
  }
}]

module.exports = config;