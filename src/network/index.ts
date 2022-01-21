import MYRequest from './request'
import { BASE_URL } from './request/config'
import LocalCache from '@/untils/cache'
const myRequest = new MYRequest({
  baseURL: BASE_URL,
  interceptors: {
    requesInterceptor: (config) => {
      const token = LocalCache.getCache('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requstInterceptorCatch: (err) => {
      console.log('请求失败拦截', err)
    },
    responseInterceptor: (config) => {
      // console.log('响应成功拦截', config)
      return config
    }
  }
})
export default myRequest
