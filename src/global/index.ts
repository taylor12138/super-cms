// 做app按需注册，比如element-plus
import { App } from 'vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

// import registerElement from './register'
import registerProperties from './register-proerties'
export default function register(app: App): void {
  // registerElement(app)
  app.use(ElementPlus)
  app.use(registerProperties)
}
