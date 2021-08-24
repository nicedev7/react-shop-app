/**
 * Next SVG Plugin
 */
module.exports = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack(config, options) {
      console.log(config.module.rules)
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/
        },
        use: ['@svgr/webpack']
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  }
}
