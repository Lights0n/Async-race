const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TeaserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new CssMinimizerWebpackPlugin(),
      new TeaserWebpackPlugin()
    ]
  }
  return config
}

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // alias: {
    //   '@assets': path.resolve(__dirname, 'assets'),
    //   '@': path.resolve(__dirname, 'src')
    // }
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev
  },
  devtool: isDev ? 'eval-source-map' : console.log(''),
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name][contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|svg|png|gif|jpeg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.xml$/,
        use: 'xml-loader'
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader"
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.([cm]?ts|tsx)$/,
        loader: "ts-loader"
      }
    ]
  }
}