import { Module } from "vuex"
import { IRootState } from "../types"
import { IDashboardState } from "./types"
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from "@/service/main/analysis/dashboard"

const analysisModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, payload: any) {
      state.categoryGoodsCount = payload
    },
    changeCategoryGoodsSale(state, payload: any) {
      state.categoryGoodsSale = payload
    },
    changeCategoryGoodsFavor(state, payload: any) {
      state.categoryGoodsFavor = payload
    },
    changeAddressGoodsSale(state, payload: any) {
      state.addressGoodsSale = payload
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      commit("changeCategoryGoodsCount", categoryCountResult.data)

      const categorySaleResult = await getCategoryGoodsSale()
      commit("changeCategoryGoodsSale", categorySaleResult.data)

      const categoryFavorResult = await getCategoryGoodsFavor()
      commit("changeCategoryGoodsFavor", categoryFavorResult.data)

      const addressCountResult = await getAddressGoodsSale()
      commit("changeAddressGoodsSale", addressCountResult.data)
    }
  }
}

export default analysisModule
