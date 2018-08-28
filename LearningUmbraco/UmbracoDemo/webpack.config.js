var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./src/js/app/app.js",
    output: {
        filename: "bundle.js"
    },
    module: {
      rules: [
            {
              test: /\.js$/,
              exclude: [/node_modules/],
              use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
              }],
            },
            // Loaders for other file types can go here
          ]
    }
};
