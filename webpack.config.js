const path = require('path');

module.exports = {
  entry: './src/luckyWebSdk.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'lucky-web-sdk.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'luckySdk',
  },
};