module.exports =
{
  entry : { 
    app : __dirname + "/app/app.js"
  }, 
  output: { 
    path     : __dirname + "/public",
    filename : "[name].js"
  },
  module : { 
    loaders : [{ 
        test   : /\.js$/,
        exclude: /node_modules/, 
        loader: 'babel-loader'
      },{
        test   : /\.css$/,
        loader : "style!css"
    }]
  }
}
