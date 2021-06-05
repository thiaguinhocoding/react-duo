const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicDir = path.resolve(__dirname, 'public');

module.exports = {
  mode: 'production',
  entry: path.join(publicDir, 'index.js'),
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.join(publicDir, 'index.html') 
      }
    )
  ]
};

