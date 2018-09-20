module.exports = {
  head: {
    title: 'gvf-client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'a vue blog.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  plugins: [
    '~/plugins/polyfill',
    '~/plugins/ant-design-vue',
    '~/plugins/date-time-formatter',
    {
      src: '~/plugins/vue-infinite-scroll',
      ssr: false
    }, {
      src: '~/plugins/vue-virtual-scroller',
      ssr: false
    },
    {
      src: '~/plugins/markdown-it-vue',
      ssr: false
    }
  ],
  build: {
    vendor: [
      '~/plugins/vue-virtual-scroller',
      '~/plugins/vue-infinite-scroll',
      '~/plugins/ant-design-vue',
      '~/plugins/markdown-it-vue',
      '~/plugins/date-time-formatter',
      'axios'
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

