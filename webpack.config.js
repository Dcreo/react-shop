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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-react-jsx',
              ['@babel/plugin-proposal-decorators', { "legacy": true }],
              ['@babel/plugin-proposal-class-properties', { "loose": true }],
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
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components/'),
      "@commons": path.resolve(__dirname, 'src/commons/'),
      "@data": path.resolve(__dirname, 'src/data/'),
      "@routings": path.resolve(__dirname, 'src/routings/'),
      "@models": path.resolve(__dirname, 'src/models/')
    }
  }
};

module.exports = conf;
