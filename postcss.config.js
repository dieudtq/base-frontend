/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */

module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-partial-import': {
      path: ['./src'],
    },
    'postcss-simple-vars': {},
    autoprefixer: {},
  },
}
