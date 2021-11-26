import { createApp } from "vue"
import App from "./App.vue"

import router from "./router"
import store from "./store"
import { setupStore } from "./store"
import { globalRegister } from "./global"

import "normalize.css"
import "./assets/css/index.less"
import "animate.css"
// 全局引入
// import ElementPlus from "element-plus"
// import "element-plus/lib/theme-chalk/index.css"

const app = createApp(App)
setupStore()

app.use(router)
app.use(store)
// 以app.components(组件的name,组件)的形式注册
// globalRegister(app)
// 以插件的形式注册
app.use(globalRegister)

app.mount("#app")

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)
