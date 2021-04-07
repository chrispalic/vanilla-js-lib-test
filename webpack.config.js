const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'ifs-base-rules-engine.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
        name: 'ifs-base-rules-engine',
        type: 'umd',
    }
  },
};