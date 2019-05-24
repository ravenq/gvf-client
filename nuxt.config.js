const pkg = require('./package')
module.exports = {
  mode: 'universal',
  head: {
    title: 'ravenq 的技术博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: '/baidu-tongji.js' },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-138051083-1',
        async: true
      },
      { src: '/google-analytics.js' },
      { src: '/baidu-spider.js' }
    ]
  },
  loading: { color: '#fff' },
  css: ['ant-design-vue/dist/antd.css'],
  plugins: [
    '@/plugins/api',
    '@/plugins/axios',
    '@/plugins/antd-ui',
    '@/plugins/date-time-formatter',
    { src: '@/plugins/vue-infinite-scroll', ssr: false },
    { src: '@/plugins/vue-virtual-scroller', ssr: false },
    { src: '@/plugins/markdown-it-vue', ssr: false }
  ],
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'http://127.0.0.1:8080/v1'
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
