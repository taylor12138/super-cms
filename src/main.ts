import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerApp from './global'
import { setupStore } from '@/store'

import './assets/css/index.less'
import 'normalize.css'

const app = createApp(App)
registerApp(app)
app.use(store)
setupStore()
// 刷新页面使用 use(router) 会马上匹配路由，而此时如果动态路由未注册完毕，则会进入not found，所以store的初始化（里面会动态添加路由）放在前面
app.use(router)
app.mount('#app')
