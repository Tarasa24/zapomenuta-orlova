const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/global.sass"',
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'raw-loader',
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
      new CompressionPlugin({
        include: /\.(html|css|js|ico|svg|png|webp)$/,
        minRatio: 0.9,
      }),
    ],
  },
  pwa: {
    manifestOptions: {
      name: 'Zapomenutá Orlová',
      short_name: 'Zapomenutá Orlová',
      start_url: '/',
      background_color: '#232b2b',
    },
    themeColor: '#fcba03',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './public/service-worker.js',
      exclude: [/_redirects/],
      navigateFallback: 'index.html',
    },
  },
}
