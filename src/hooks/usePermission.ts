import { useMyStore } from '@/store'
export default function usePermission(pageName: string, handler: string) {
  const store = useMyStore()
  const vertify = `system:${pageName}:${handler}`
  return store.state.login.permissions.includes(vertify)
}
