const withPlugins = require('next-compose-plugins')
const withSvg = require('./next-plugins/next-svg')

module.exports = withPlugins([withSvg], {
  distDir: 'build',
  poweredByHeader: false,
  webpack5: false,
  env: {
    LOCALE: 'zh-CN'
  }
})
