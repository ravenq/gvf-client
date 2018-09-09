import axios from 'axios'
import config from '@/config'
import { Message } from 'ant-design-vue'
import isEqual from 'lodash/isEqual'

const request = axios.create({
  baseURL: config.BASE_API,
  timeout: 5000,
})

request.interceptors.request.use(config => {
  if (process.BROWSER_BUILD) {
    let token = window.sessionStorage.token
    if (token) {
      config.headers['Session'] = token
    }
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

request.interceptors.response.use(
  response => {
    if (isEqual(response.data.status, 0)) {
      return response.data
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    if (process.BROWSER_BUILD) {
      console.log('err' + error)
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default request
