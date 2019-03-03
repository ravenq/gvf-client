import api from '@/api'
import { Message } from 'ant-design-vue'
import isEqual from 'lodash.isequal'

export default function({ $axios, redirect }) {
  // binding api
  $axios.api = api

  $axios.onRequest(config => {
    const token = window.sessionStorage.token
    if (token) {
      config.headers.Session = token
    }
  })

  $axios.onResponse(response => {
    if (isEqual(response.data.status, 0)) {
      return response.data
    } else {
      return Promise.reject(response.data)
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    } else {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
  })
}
