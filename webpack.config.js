const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            //allows loading images
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
          //allows importing css stylesheets
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
    ],
  },
};