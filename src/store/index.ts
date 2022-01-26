import { createStore, Store, useStore } from 'vuex'

import { getPageListData } from '@/network/system'
import { IRootState, IStoreType } from './types'
import login from './login'
import system from './system'

enum rootAPI {
  departmentAPI = '/department/list', //请求完整部门数据API
  roleAPI = '/role/list', //请求完整部门数据API
  menuAPI = '/menu/list' //请求完整菜单数据API
}

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'allen',
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list: any[]) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list: any[]) {
      state.entireRole = list
    },
    changeEntireMenu(state, list: any[]) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitialData({ commit }) {
      const departmentData = await getPageListData(rootAPI.departmentAPI, {
        offset: 0,
        size: 1000
      })
      const roleData = await getPageListData(rootAPI.roleAPI, {
        offset: 0,
        size: 1000
      })
      const menuData = await getPageListData(rootAPI.menuAPI, {})
      commit('changeEntireDepartment', departmentData.data.list)
      commit('changeEntireRole', roleData.data.list)
      commit('changeEntireMenu', menuData.data.list)
    }
  },
  modules: {
    login,
    system
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
