const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/luckyWebSdk.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'lucky-web-sdk.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'luckySdk',
      type: 'var',
    },
    clean: true,
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
};