const path = require('path')

module.exports = {
  entry: {
    app: './entries/app.js',
  },
  output: {
    filename: './public/javascripts/[name].js',
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
    ],
  },
}
