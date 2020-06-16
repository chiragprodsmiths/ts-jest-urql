import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import { config } from './src/configs';

const webPackConfig: webpack.Configuration | webpackDevServer.Configuration = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.tsx',
  node: {
    fs: 'empty',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, loader: 'ts-loader', exclude: /node_modules/ },
      {
        enforce: 'pre',
        test: /\.js(x?)$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'image/svg+xml',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'application/octet-stream',
          name: '[name].[ext]',
        },
      },
    ],
  },
  devServer: {
    port: 4000,
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    index: 'index.html',
    contentBase: './public',
  },
  plugins: [new webpack.EnvironmentPlugin(config)],
};

export default webPackConfig;
