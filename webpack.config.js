var path = require('path')

module.exports = {
   entry: path.resolve(__dirname, 'src/App.js'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/' // will search for images and assets at /images - i.e. treats the dist folder as the root
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: [ path.resolve(__dirname, 'src'), path.resolve(__dirname) ],
            query: {
               presets: [ 'es2015', 'react' ]
            }
         },
         {
            test: /\.scss$/,
            include: path.resolve(__dirname, 'src/styles'),
            loaders: [ 'style',
                       'css',
                       'autoprefixer',
                       'sass' ]
         },
         {
            test: /\.json$/,
            loader: 'json'
         },
         {
            test: /\.(woff|ttf|eot|svg)$/,
            loader: 'url?limit=65000'
         }
      ]
   }
}