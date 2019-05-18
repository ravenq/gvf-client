// import { message } from 'ant-design-vue'
import isEqual from 'lodash.isequal'

export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    if (process.client) {
      const token = window.sessionStorage.token
      if (token) {
        config.headers.Session = token
      }
    }
  })

  $axios.onResponse(response => {
    if (isEqual(response.data.status, 0)) {
      return response.data
    } else {
      // message.error(JSON.stringify(response.data))
      return Promise.reject(response.data)
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    } else {
      // message.error(JSON.stringify(error.message))
    }
  })
}
