/* jshint node:true */
'use strict';

module.exports = {
  entry: './client/views/main/main.jsx',
  output: {
    path: './client',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/,       loader: 'jsx-loader?harmony'                    },
      { test: /\.styl$/,      loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.css$/,       loader: 'style-loader!css-loader'               },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'                 }
    ]
  }
};
