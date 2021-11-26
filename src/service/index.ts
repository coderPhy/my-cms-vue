// service 统一出口
import HYRequest from "./request"
import localCache from "@/utils/cache"
import { BASE_URL, TIME_OUT } from "./request/config"

// axios实例
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // showLoading: true,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache("token") ?? ""
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // console.log(config)
      // console.log("实例特有的,请求成功的拦截")
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log(err)
      // console.log("实例特有的,请求失败的拦截")
      return err
    },
    responseInterceptor: (res) => {
      // console.log(res)
      // console.log("实例特有的,响应成功的拦截")
      return res
    },
    responseInterceptorCatch: (err) => {
      // console.log(err)
      // console.log("实例特有的,响应失败的拦截")
      return err
    }
  }
})

// axios实例
export const hyRequest2 = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default hyRequest
