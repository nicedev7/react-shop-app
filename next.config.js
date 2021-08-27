const withPlugins = require('next-compose-plugins')
const withSvg = require('./next-plugins/next-svg')

module.exports = withPlugins([withSvg], {
  poweredByHeader: false,
  webpack5: false,
  env: {
    LOCALE: 'zh-CN'
  },
  assetPrefix: '',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ]
  }
})
