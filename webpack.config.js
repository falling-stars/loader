const {resolve} = require('path')

module.exports = {
  entry: {
    bundle: resolve(__dirname, './main')
  },
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          {
            loader: resolve(__dirname, './text-loader.js')
          }
        ]
      },
      {
        test: /\.png/,
        use: [
          {
            loader: resolve(__dirname, './file-loader.js'),
            options: {
              name: 'assets/images/[name].[hash]-m.[ext]'
            }
          }
        ]
      }
    ]
  }
}