import { Module } from 'vuex'
import { IRootState } from '../types'
import { ISystemState } from './types'
import { getPageListData } from '@/network/system'
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeSystemList(state, list: any[]) {
      state.userList = list
    },
    changeSystemCount(state, count: number) {
      state.userCount = count
    }
  },
  actions: {
    async getPageDataAction({ commit }, payload: any) {
      const pageRes = await getPageListData(
        payload.pageUrl,
        payload.queryOtions
      )
      const { list, totalCount } = pageRes.data
      commit('changeSystemList', list)
      commit('changeSystemCount', totalCount)
    }
  }
}
export default systemModule
