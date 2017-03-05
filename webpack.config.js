const fs = require('fs');

module.exports = {
  entry: {
    app: './entries/app.js',
  },
  output: {
    filename: './public/javascripts/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }],
      }
    ]
  },
};
