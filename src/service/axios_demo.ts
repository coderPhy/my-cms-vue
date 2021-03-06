import axios from "axios"

// axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
//   console.log(res)
// })

// axios.request({
//   method: "get"
// })

// new Promise<string>((resolve, reject) => {
//   resolve("aaa")
// }).then((res) => {
//   console.log(res)
// })

// axios
//   .get("http://httpbin.org/get", {
//     params: {
//       name: "coderPhy",
//       age: 20
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// axios
//   .post("http://httpbin.org/post", {
//     data: {
//       name: "coderPhy",
//       age: 22
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// axios的配置
axios.defaults.baseURL = "http://httpbin.org"
axios.defaults.timeout = 10000

axios
  .get("/get", {
    params: {
      name: "coderPhy",
      age: 20
    }
  })
  .then((res) => {
    console.log(res)
  })

axios
  .post("/post", {
    data: {
      name: "coderPhy",
      age: 22
    }
  })
  .then((res) => {
    console.log(res)
  })

axios
  .all([
    axios.get("/get", { params: { name: "phy", age: 21 } }),
    axios.post("/post", { data: { name: "why", age: 22 } })
  ])
  .then((res) => {
    console.log(res)
  })

axios.interceptors.request.use(
  (config) => {
    console.log("请求成功的拦截")
    return config
  },
  (err) => {
    console.log("请求发送失败的拦截")
    return err
  }
)

axios.interceptors.response.use(
  (res) => {
    console.log("响应成功的拦截")
    return res.data
  },
  (err) => {
    console.log("服务器响应失败的拦截")
    return err
  }
)
