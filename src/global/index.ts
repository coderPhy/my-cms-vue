import type { App } from "vue"
import registerElement from "./register-element"
import registerProperties from "./register-properties"

export function globalRegister(app: App<Element>): void {
  // 两种形式注册element-plus
  // registerElement(app)
  app.use(registerElement)
  registerProperties(app)
}
