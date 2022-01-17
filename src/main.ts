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
app.use(router)
setupStore()
app.mount('#app')
