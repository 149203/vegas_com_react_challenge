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
            test: /\.jsx?$/, // a regexp for files ending in js or jsx
            loader: 'babel-loader',
            include: [ path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/react-fittext') ], // including fittext becuz of a bug on their end
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
            // use 'loaders' for an array of loaders
            // loaders run BOTTOM (sass) to TOP (style)
            // we use 'array style' as opposed to ! delimiter style
         }
      ]
   }
}