const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  productionSourceMap: false,
  publicPath:
    process.env.NODE_ENV === 'production' ? '/historicka-stezka/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/global.sass"',
      },
    },
  },
  configureWebpack: {
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
      name: 'Historická stezka starou Orlovou',
      short_name: 'Stezka - Orlová',
      start_url: '/',
    },
    themeColor: '#fcba03',
    msTileColor: '#232b2b',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './public/service-worker.js',
    },
  },
};
