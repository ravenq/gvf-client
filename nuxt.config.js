const pkg = require('./package')
module.exports = {
  mode: 'spa',
  head: {
    title: 'ravenq 的个人主页',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: '/baidu-tongji.js' }]
  },
  loading: { color: '#fff' },
  css: ['ant-design-vue/dist/antd.css'],
  plugins: [
    '@/plugins/api',
    '@/plugins/axios',
    '@/plugins/antd-ui',
    '@/plugins/date-time-formatter',
    '@/plugins/vue-infinite-scroll',
    '@/plugins/vue-virtual-scroller',
    '@/plugins/markdown-it-vue'
  ],
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'http://www.aqcoder.com:8080/v1'
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
