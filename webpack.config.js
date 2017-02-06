
var webpack = require('webpack');
    module.exports = {
    entry:'./main.jsx',
    output:{
        filename:'bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
        
        ]
    },
    plugins: [   //插件声明
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
}
