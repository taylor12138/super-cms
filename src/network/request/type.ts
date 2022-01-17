import { AxiosRequestConfig } from 'axios'
export interface IInterceptor {
  requesInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requstInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  responseInterceptorCatch?: (err: any) => any
}
export interface IConfig extends AxiosRequestConfig {
  interceptors?: IInterceptor
  showLoading?: boolean
}
