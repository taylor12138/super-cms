export default function mapMenuPermission(menu: any[]): string[] {
  let permission: string[] = []
  for (const item of menu) {
    if (item.type === 1 || item.type === 2) {
      permission = permission.concat(mapMenuPermission(item.children ?? []))
    } else if (item.type === 3) {
      permission.push(item.permission)
    }
  }
  return permission
}
