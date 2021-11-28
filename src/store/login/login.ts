import { Module } from "vuex"
import router from "@/router"

import { mapMenusToRoutes, mapMenusToPermissions } from "@/utils/map-menus"

import type { ILoginState } from "./types"
import type { IRootState } from "../types"
import type { IAccount } from "@/service/login/type"

import localCache from "@/utils/cache"
import {
  accountLoginRequest,
  RequestUserInfoById,
  RequestUserMenusByRoleId
} from "@/service/login/login"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: null,
      userMenus: null,
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenus: any) {
      state.userMenus = userMenus
      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute("main", route)
      })

      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    // 1.登录
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)

      const { token, id } = loginResult.data
      commit("changeToken", token)
      localCache.setCache("token", token)

      // 发送初始化的请求(完整role/department) 在模块调用root模块的actions
      dispatch("getInitialDataAction", null, {
        root: true
      })

      // 2.请求用户信息
      const userInfoResult = await RequestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit("changeUserInfo", userInfo)
      localCache.setCache("userInfo", userInfo)

      // 3.请求用户菜单
      const userMenusRequest = await RequestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusRequest.data
      commit("changeUserMenu", userMenus)
      localCache.setCache("userMenus", userMenus)

      // 路由跳转
      router.push("/main")
    },
    phoneLoginAction() {
      //
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("changeToken", token)
        dispatch("getInitialDataAction", null, {
          root: true
        })
      }

      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }

      const userMenus = localCache.getCache("userMenus")
      if (userMenus) {
        commit("changeUserMenu", userMenus)
      }
    }
  }
}

export default loginModule
