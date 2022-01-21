import { IBread } from '@/components/breadcrumb'

export default function MapPathMenu(
  currentPath: string,
  userMenu: any[],
  breadcrumbs?: IBread[]
): any {
  for (const menu of userMenu) {
    if (menu.type === 1) {
      const ret = MapPathMenu(currentPath, menu.children ?? [])
      if (ret) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: ret.name })
        return ret
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
