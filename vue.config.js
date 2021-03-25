const webpack = require('webpack')

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
    ],
    performance: {
      maxAssetSize: 750000,
    },
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
    },
  },
}
