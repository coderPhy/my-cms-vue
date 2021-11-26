<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">phy-mall-cms</span>
    </div>
    <el-menu
      class="el-menu-vertical"
      :collapse="collapse"
      :collapse-transition="false"
      :default-active="currentMenu"
      :unique-opened="true"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMunes" :key="item">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <el-submenu :index="item.id + ''">
            <!-- 二级菜单的标题 -->
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleMenuItemClick(subItem)"
              >
                <i v-if="subItem.icon" class="subItem.icon"></i>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 一级菜单 -->
        <template v-if="item.type === 2">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { useRouter, useRoute } from "vue-router"

import { useStore } from "@/store"
import { pathMapToMeun } from "@/utils/map-menus"

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const router = useRouter()

    const userMunes = computed(() => store.state.login.userMenus)

    const menu = pathMapToMeun(userMunes.value, route.path)
    const currentMenu = ref(menu.id + "")

    // event handle
    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? "not-found"
      })
    }

    return {
      currentMenu,
      userMunes,
      handleMenuItemClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      color: white;
      font-size: 16px;
      font-weight: 700;
    }
  }
}

.el-submenu {
  background-color: #001529 !important;
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135 !important;
  }
}

// hover
.el-menu-item :hover {
  color: #fff !important;
}

.el-menu-item.is-active {
  color: #fff !important;
  background-color: #0a60bd !important;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
  transition: all 1s;
}
.el-menu {
  border-right: none;
}
</style>
