<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <nav-menu :collapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header"
          ><nav-header @foldChange="handleFoldChange"></nav-header>
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

import navMenu from "@/components/nav-menu"
import navHeader from "@/components/nav-header"

export default defineComponent({
  components: {
    navMenu,
    navHeader
  },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      handleFoldChange
    }
  }
})
</script>

<style scoped lang="less">
body > .el-container {
  margin-bottom: 40px;
}

.main {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
  .page-info {
    background-color: #fff;
  }
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  text-align: left;
  line-height: 200px;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linner;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

.el-header {
  display: flex;
  color: #333;
  align-items: center;
  text-align: center;
  height: 48px !important;
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
