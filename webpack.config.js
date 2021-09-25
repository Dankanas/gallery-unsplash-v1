const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { map } = require('lodash');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const IOconfig = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    dir: path.resolve(__dirname, 'dist'),
    js: 'app.bundle.[hash].js',
    css: 'styles.min.[hash].css',
    assets: 'assets/',
  },
  htmlTemplate: path.resolve(__dirname, 'src/index.html'),
  themeRes: path.resolve(__dirname, 'src/theme/res/_index.scss'),
};

module.exports = {
  mode: 'development',
  entry: IOconfig.entry,
  devtool: 'source-map',
  output: {
    path: IOconfig.output.dir,
    filename: IOconfig.output.js,
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: IOconfig.themeRes,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: IOconfig.htmlTemplate,
    }),
    new MiniCssExtractPlugin({
      filename: IOconfig.output.css,
    }),
    new StylelintPlugin(),
    new CleanWebpackPlugin(),



  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

};