import axios from "axios"
import type { AxiosInstance } from "axios"
import { ElLoading } from "element-plus"
import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type"

import { HyRequestConfig, HYRequestInterceptors } from "./type"

const DEFAULT_LOADING = true

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean
  constructor(config: HyRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    // 每个实例特有的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("所有的实例都有的拦截器:请求成功的拦截")
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "loading...",
            background: "rgba(0,0,0,0.5)"
          })
        }
        return config
      },
      (err) => {
        // console.log("所有的实例都有的拦截器:请求失败的拦截")
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 将loading移除
        if (this.showLoading) {
          this.loading?.close()
        }
        // console.log("所有的实例都有的拦截器: 响应成功的拦截")
        // const data = res.data
        // if (data.returnCode === "-1001") {
        //   console.log("请求失败, 错误信息")
        // } else {
        //   return data
        // }
        return res.data
      },
      (err) => {
        if (this.showLoading) {
          this.loading?.close()
        }
        if (err.response.status === 404) {
          console.log("404 错误")
        }
        // console.log("所有的实例都有的拦截器: 响应失败的拦截")
        return err
      }
    )
  }

  request<T = any>(config: HyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求特有的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = false
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res)
          }
          // console.log(res)
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          console.log(err)
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T = any>(config: HyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T = any>(config: HyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }

  delete<T = any>(config: HyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  patch<T = any>(config: HyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}

export default HYRequest
