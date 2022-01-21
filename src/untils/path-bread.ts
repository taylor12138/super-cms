import { IBread } from '@/components/breadcrumb'
import MapPathMenu from './path-menu'

export default function MapPathBread(
  currentPath: string,
  userMenu: any[]
): any {
  const breadcrumbs: IBread[] = []
  MapPathMenu(currentPath, userMenu, breadcrumbs)
  return breadcrumbs
}
