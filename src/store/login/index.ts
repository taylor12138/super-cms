import { Module } from 'vuex'

import { accountRequest, getUserRequest, getMenuRequest } from '@/network/login'
import { IUser } from '@/network/login/type'
import { ILoginState } from './types'
import { IRootState } from '../types'
import LocalCache from '@/untils/cache'
import router from '@/router'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenu: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenu: any) {
      state.userMenu = userMenu
    }
  },
  actions: {
    async loginAccountAction({ commit }, payload: IUser) {
      // 登陆验证
      const res = await accountRequest(payload)
      const { id, token } = res.data
      commit('changeToken', token)
      LocalCache.setCache('token', token)

      // 获取用户信息
      const res2 = await getUserRequest(id)
      const userInfo = res2.data
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      // 获取权限列表
      const roleId = userInfo.role?.id
      const userMenu = await getMenuRequest(roleId)
      commit('changeUserMenu', userMenu.data)
      LocalCache.setCache('userMenu', userMenu.data)

      //发生跳转
      router.push('/main')
    },
    loginPhoneAction(context, payload) {
      console.log('执行了actions', context)
      console.log(payload)
    },
    loadLoginCache({ commit }) {
      const token = LocalCache.getCache('token')
      if (token) commit('changeToken', token)
      const userInfo = LocalCache.getCache('userInfo')
      if (userInfo) commit('changeUserInfo', userInfo)
      const userMenu = LocalCache.getCache('userMenu')
      if (userMenu) commit('changeUserMenu', userMenu)
    }
  }
}
export default loginModule
