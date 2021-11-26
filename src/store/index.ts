import { createStore, Store, useStore as useVuexStore } from "vuex"

import type { IRootState, IStoreType } from "./types"

import login from "./login/login"
import system from "./main/system/system"
import dashboard from "./analysis/dashboard"

import { getPageListData } from "@/service/main/system/system"
const store = createStore<IRootState>({
  state() {
    return {
      entireDepartment: [],
      entirRole: [],
      entirMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntirRole(state, list) {
      state.entirRole = list
    },
    changeEntirMenu(state, list) {
      state.entirMenu = list
    }
  },
  actions: {
    // 2.获取初始化数据
    async getInitialDataAction({ commit }) {
      // 1.发送网络请求
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data

      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data

      const menuResult = await getPageListData("/menu/list", {})
      const { list: menuList } = menuResult.data

      // 2.保存数据
      commit("changeEntireDepartment", departmentList)
      commit("changeEntirRole", roleList)
      commit("changeEntirMenu", menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

// 刷新时重置vuex状态
export function setupStore() {
  store.dispatch("login/loadLocalLogin")
  store.dispatch("getInitialDataAction")
}

// 将rootStore和loginStore结合起来
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
