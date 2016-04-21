const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const NpmInstallPlugin = require('npm-install-webpack-plugin');

const NODE_ENV = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common_config = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  },
};

const hot_module_config = {
  devServer: {
    contentBase: PATHS.build,

    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    stats: 'errors-only',

    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin({
      save: true // --save
    })
  ]
};

switch (NODE_ENV) {
case 'build':
  module.exports = merge(common_config, {});
  break;
case 'start':
default:
  module.exports = merge(common_config, hot_module_config);
  break;
}
