const path = require("path");
module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "output"),
        filename: "bundle.js",
      },
  
  module:{
    rules:[
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use:"babel-loader",
    },
    ],
    },
};