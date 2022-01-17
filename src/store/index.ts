import { createStore, Store, useStore } from 'vuex'

import { IRootState, IStoreType } from './types'
import login from './login'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'allen',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
// 做store的初始化
export function setupStore() {
  store.dispatch('login/loadLoginCache')
}
//负责导出store（coderwhy老师的特殊处理）
export function useMyStore(): Store<IStoreType> {
  return useStore()
}
export default store
