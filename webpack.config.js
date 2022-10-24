const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './build/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
    library: {
      name: 'emoji-lib',
      type: 'umd',
    },
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'PropTypes',
      root: 'PropTypes',
    },
  },
  resolve: {
    modules: [path.resolve(__dirname, 'dist'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.d\.ts$/,
        loader: 'ignore-loader',
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' }, // to inject the result into the DOM as a style block
          { loader: 'css-loader', options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: 'sass-loader' }, // to convert SASS to CSS
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
}
