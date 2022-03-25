let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let path = require('path')

let conf = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './public/dist/'),
    filename: 'main.js',
    publicPath: 'public/dist/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-react-jsx',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  devServer: {
    liveReload: true,
    watchFiles: ["src/*", "src/**/*"],
    historyApiFallback: true,
    static: { directory: path.join(__dirname, 'public') },
    open: { target: ['index.html'] },
    devMiddleware: { writeToDisk: true },
    compress: true,
    hot: true,
    port: 9000,
  },
};

module.exports = conf;
