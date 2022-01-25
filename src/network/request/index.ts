import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { IInterceptor, IConfig } from './type'

import { ElLoading } from 'element-plus'

const DEFAULT_LOADING = true
// 把一大堆东西封装到一块，推荐使用类进行封装
export default class MYRequest {
  instance: AxiosInstance
  interceptors?: IInterceptor
  showLoading: boolean
  loadingInstance?: any
  constructor(config: IConfig) {
    // 初始化
    this.instance = axios.create(config)
    this.interceptors = config?.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    //加载传入的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requesInterceptor,
      this.interceptors?.requstInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //设置默认的全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: 'loading~',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => err
    )
    this.instance.interceptors.response.use(
      (config) => {
        // console.log('设置了全局拦截响应', config)
        this.loadingInstance?.close()
        return config.data
      },
      (err) => {
        this.loadingInstance?.close()
        return err
      }
    )
  }
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: AxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: AxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
