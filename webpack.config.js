/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const configCallback = (env, argv) => {
  const mode = argv.mode || 'development';
  console.log('running webpack with mode:', mode);

  const config= {
    mode,

    entry: {
      main: './src/index.ts',
    },

    // This tells webpack to not mess up with nodejs native packages
    // See https://github.com/webpack-contrib/css-loader/issues/447#issuecomment-308918678
    target: 'node',

    node: {
      // Do not use publicPath to overwrite __dirname, which is confusing
      __dirname: false,
      fs: 'empty'
    },

    output: {
      filename: mode === 'production' ? '[name].js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'commonjs',
    },

    resolve: {
      extensions: ['.ts', '.js'],
    },

    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }],
    },
  };

  if (mode === 'development') {
    config.devtool = 'inline-source-map';
  }

  return config;
};

module.exports = configCallback;
