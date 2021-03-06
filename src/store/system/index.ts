import { Module } from 'vuex'
import { IRootState } from '../types'
import { ISystemState } from './types'
import {
  getPageListData,
  deletePageListData,
  createPageListData,
  editPageListData
} from '@/network/system'
const urlMap = new Map([
  ['users', '/users/list'],
  ['role', '/role/list'],
  ['goods', '/goods/list'],
  ['menu', '/menu/list']
])
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    getList(state) {
      return (pageName: string): any[] => {
        switch (pageName) {
          case 'users':
            return state.userList
          case 'role':
            return state.roleList
          case 'goods':
            return state.goodsList
          case 'menu':
            return state.menuList
          default:
            return []
        }
      }
    },
    getCount(state) {
      return (pageName: string): number => {
        switch (pageName) {
          case 'users':
            return state.userCount
          case 'role':
            return state.roleCount
          case 'goods':
            return state.goodsCount
          case 'menu':
            return state.menuCount
          default:
            return 0
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
    },
    goodsChangeList(state, list: any[]) {
      state.goodsList = list
    },
    goodsChangeCount(state, count: number) {
      state.goodsCount = count
    },
    menuChangeList(state, list: any[]) {
      state.menuList = list
    },
    menuChangeCount(state, count: number) {
      state.menuCount = count
    }
  },
  actions: {
    // ??????????????????
    async getPageDataAction({ commit }, payload: any) {
      let pageURL = urlMap.get(payload.pageName)
      if (!pageURL) {
        pageURL = ''
        console.log('url????????????')
      }
      const pageRes = await getPageListData(pageURL, payload.queryOtions)
      const { list, totalCount = 0 } = pageRes.data

      commit(`${payload.pageName}ChangeList`, list)
      commit(`${payload.pageName}ChangeCount`, totalCount)
    },
    // ????????????
    async deletePageDataAction({ dispatch }, payload: any) {
      const { id, pageName } = payload
      const pageUrl = `${pageName}/${id}`
      // ??????id???????????????????????????
      await deletePageListData(pageUrl)
      // ??????????????????????????????????????????
      dispatch('getPageDataAction', {
        pageName,
        queryOtions: {
          offset: 0,
          size: 10
        }
      })
    },
    // ??????????????????
    async createPageDataAction({ dispatch }, payload) {
      const { pageName, queryInfo } = payload
      const pageUrl = `${pageName}`
      await createPageListData(pageUrl, queryInfo)
      // ????????????????????????
      dispatch('getPageDataAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload) {
      const { pageName, queryInfo, id } = payload
      const pageUrl = `${pageName}/${id}`
      await editPageListData(pageUrl, queryInfo)
      // ????????????????????????
      dispatch('getPageDataAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}
export default systemModule
