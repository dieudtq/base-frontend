/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 * @Summary Config webpack for development
 */

const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(c|sc)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              // eslint-disable-next-line no-dupe-keys
              modules: {
                localIdentName: '[path][name]__[local]__[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
}
