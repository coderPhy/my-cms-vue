<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
// import { ElButton } from "element-plus"
// import "element-plus/lib/theme-chalk/el-button.css"

// 国际化
import zhCn from "element-plus/lib/locale/lang/zh-cn"
export default defineComponent({
  name: "App",
  // components: {
  //   ElButton
  // }
  setup() {
    return {
      zhCn
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
