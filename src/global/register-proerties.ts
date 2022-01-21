import { App } from 'vue'

import { formatUtcTime } from '@/untils/time-format'
export default function registerProperties(app: App) {
  // 为了区分全局变量，在函数前面加一个$
  app.config.globalProperties.$filter = {
    formatTime(time: string) {
      return formatUtcTime(time)
    }
  }
}
