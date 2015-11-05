var webpack = require('webpack');
var path = require('path');

module.exports = {
  devServer: {
    // You can change this to your server IP address to access it remotely
    host: 'localhost'
  },
  resolve: {
    // choose from root, so you can easily find all and replace
    root: path.join(__dirname, '..', 'modules'),
    extensions: ['', '.js', '.jsx', '.json', '.css']
  }
};
