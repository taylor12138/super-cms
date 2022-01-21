import { RouteRecordRaw } from 'vue-router'
let firstMenu: any = null
function mapMenutoRoutes(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 默认加载所有的路由
  const allRoutes: RouteRecordRaw[] = []
  // require.context 是webpack的一个工具，可以帮助我们去加载某一个文件夹
  // 第二个参数是表明是否要递归查找
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // 拿到每个路由相对该文件夹下的完整路径，然后逐个require拿到导出的对象
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  function DFSTurnRoute(userMenu: any[]) {
    for (const item of userMenu) {
      if (item.type === 2) {
        const route = allRoutes.find((route) => route.path === item.url)
        if (route) routes.push(route)
        if (!firstMenu) firstMenu = item
      } else {
        DFSTurnRoute(item.children)
      }
    }
  }

  DFSTurnRoute(userMenu)
  return routes
}
export { mapMenutoRoutes, firstMenu }
