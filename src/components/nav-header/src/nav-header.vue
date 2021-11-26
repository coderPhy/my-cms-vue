<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handlefoldClick"
    ></i>
    <div class="content">
      <hy-breadcrumb :breadCrumbs="breadCrumds"></hy-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "@/store"

import hyBreadcrumb from "@/base-ui/breadcrumb"
import userInfo from "./user-info.vue"

import { pathMapBreadCrumds } from "@/utils/map-menus"

export default defineComponent({
  components: { userInfo, hyBreadcrumb },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const route = useRoute()
    const store = useStore()

    const isFold = ref(false)

    const handlefoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }

    const breadCrumds = computed(() => {
      const useMenus = store.state.login.userMenus
      const currentPath = route.path

      return pathMapBreadCrumds(useMenus, currentPath)
    })

    return { isFold, breadCrumds, handlefoldClick }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    width: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
