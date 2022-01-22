import { Module } from 'vuex'
import { IRootState } from '../types'
import { ISystemState } from './types'
import { getPageListData } from '@/network/system'
const urlMap = new Map([
  ['users', '/users/list'],
  ['role', '/role/list']
])
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    getList(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userList
          case 'role':
            return state.roleList
          default:
            return ''
        }
      }
    }
  },
  mutations: {
    usersChangeList(state, list: any[]) {
      state.userList = list
    },
    usersChangeCount(state, count: number) {
      state.userCount = count
    },
    roleChangeList(state, list: any[]) {
      state.roleList = list
    },
    roleChangeCount(state, count: number) {
      state.roleCount = count
    }
  },
  actions: {
    async getPageDataAction({ commit }, payload: any) {
      let pageURL = urlMap.get(payload.pageName)
      if (!pageURL) {
        pageURL = ''
        console.log('url地址有误')
      }
      const pageRes = await getPageListData(pageURL, payload.queryOtions)
      const { list, totalCount } = pageRes.data
      commit(`${payload.pageName}ChangeList`, list)
      commit(`${payload.pageName}ChangeCount`, totalCount)
    }
  }
}
export default systemModule
