<template>
  <div class="overview">
    <!-- 关于 -->
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">
          <strong>关于</strong>
        </div>
      </template>
      <transition
        enter-active-class="animate__rollIn animate__animated"
        leave-active-class="animate__rollOut animate__animated"
      >
        <h4 v-if="isShow" class="about-content">
          vue3Admin是基于Vue3﹑Vuex﹑VueRouter﹑Webpack﹑ElementPlus﹑TypeScript﹑Echart5等后台系统解决方案
        </h4>
      </transition>
    </el-card>
    <!-- 技术栈 -->
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">技术栈</div>
      </template>
      <template v-for="item in techniques" :key="item.name">
        <span class="techniques-info">
          <span class="techniques-info-item">• {{ item.name }} :</span>
          <el-link type="primary">{{ item.value }}</el-link>
        </span>
      </template>
    </el-card>
    <!-- 生产环境依赖 -->
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">生产环境依赖</div>
      </template>
      <template v-for="item in dependencies" :key="item.name">
        <span class="techniques-info">
          <span class="techniques-info-item">• {{ item.name }} :</span>
          <el-link type="primary">{{ item.value }}</el-link></span
        >
      </template>
    </el-card>
    <!-- 开发依赖 -->
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">开发依赖</div>
      </template>
      <el-row>
        <template v-for="item in devDependencies" :key="item.name">
          <el-col :span="12">
            <span class="techniques-info">
              <span class="techniques-info-item">
                {{ item.name }}
              </span>
              <el-link type="primary">{{ item.value }}</el-link>
            </span>
          </el-col>
        </template>
      </el-row>
    </el-card>
    <!-- 项目结构 -->
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">项目结构</div>
        <pre class="construction">
├─assets
  │  ├─css
  │  └─img
  ├─base-ui
  │  ├─breadcrumb
  │  │  ├─src
  │  │  └─types
  │  ├─card
  │  │  └─src
  │  ├─echart
  │  │  ├─data
  │  │  ├─hooks
  │  │  └─src
  │  ├─form
  │  │  ├─src
  │  │  └─types
  │  └─table
  │      └─src
  ├─components
  │  ├─nav-header
  │  │  └─src
  │  ├─nav-menu
  │  │  └─src
  │  ├─page-content
  │  │  └─src
  │  ├─page-echarts
  │  │  ├─src
  │  │  ├─types
  │  │  └─utils
  │  ├─page-modal
  │  │  └─src
  │  └─page-search
  │      └─src
  ├─global
  ├─hooks
  ├─router
  │  └─main
  │      ├─analysis
  │      │  ├─dashboard
  │      │  └─overview
  │      ├─product
  │      │  ├─category
  │      │  └─goods
  │      ├─story
  │      │  ├─chat
  │      │  └─list
  │      └─system
  │          ├─department
  │          ├─menu
  │          ├─role
  │          └─user
  ├─service
  │  ├─login
  │  ├─main
  │  │  ├─analysis
  │  │  └─system
  │  └─request
  ├─store
  │  ├─analysis
  │  ├─login
  │  └─main
  │      ├─product
  │      └─system
  ├─utils
  └─views
      ├─login
      │  ├─config
      │  └─cpns
      ├─main
      │  ├─analysis
      │  │  ├─dashboard
      │  │  └─overview
      │  ├─product
      │  │  ├─category
      │  │  └─goods
      │  │      └─config
      │  ├─story
      │  │  ├─chat
      │  │  └─list
      │  │      └─config
      │  └─system
      │      ├─department
      │      │  └─config
      │      ├─menu
      │      │  └─config
      │      ├─role
      │      │  └─config
      │      └─user
      │          └─config
      └─not-found
        </pre>
      </template>
    </el-card>
    <!-- 项目规范 -->
    <el-card class="box-card" shadow="always">
      <template #header>
        <h4 class="card-header">项目规范</h4>
      </template>
      <span class="card-header card-header-title">文件名称规范</span>
      <el-row class="standard">
        <el-col :span="8" class="key">
          <div>文件夹</div>
          <div>文件(.ts .vue .json .d.ts)</div>
        </el-col>
        <el-col :span="8" :offset="2" class="value">
          <div class="value-item">
            <el-link type="primary">统一小写, 多个单词使用-分割</el-link>
          </div>
          <div class="value-item">
            <el-link type="primary">统一小写, 多个单词使用-分割</el-link>
          </div>
        </el-col>
      </el-row>
      <span class="card-header card-header-title">组件编写规范</span>
      <el-row class="standard">
        <el-col :span="8" class="key">
          <div class="key-item">组件的文件</div>
          <div class="key-item">组件的目录结构</div>
          <div class="key-item">组件导包顺序</div>
          <div class="key-item">组件的名称</div>
          <div class="key-item">组件的props</div>
        </el-col>
        <el-col :span="8" :offset="2" class="value">
          <div class="value-item">
            <el-link type="primary">统一小写, 多个单词使用-分割</el-link>
          </div>
          <div class="value-item">
            <el-link type="primary">
              例如 button 组件：button/src/index.vue, 统一在button/index.ts导出
            </el-link>
          </div>
          <div class="value-item">
            <el-link type="primary">
              导vue技术栈的包 , 导第三方的工具函数,导本地的组件,导本地的工具函数
            </el-link>
          </div>
          <div class="value-item">
            <el-link type="primary">统一大写开头，驼峰命名</el-link>
          </div>
          <div class="value-item">
            <el-link type="primary">
              小写开头，驼峰命名，必须编写类型默认值
            </el-link>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue"

export default defineComponent({
  name: "overview",
  setup() {
    const techniques = [
      { name: "开发工具", value: "Visual Studio Code" },
      { name: "编程语言", value: "TypeScript 4.x + javaScript" },
      { name: "构建工具", value: "Webpack5.x" },
      { name: "前端框架", value: "Vue 3.x" },
      { name: "路由工具", value: "Vue Router 4.x" },
      { name: "状态管理", value: "Vuex 4.x" },
      { name: "UI框架", value: "Element Plus" },
      { name: "可视化", value: "Echarts5.x" },
      { name: "富文本", value: "WangEditor" },
      { name: "工具库", value: "@vueuse/core + dayjs + countup.js" },
      { name: "CSS 预编译", value: "Less" },
      { name: "HTTP 工具", value: "Axios" },
      { name: "Git Hook 工具", value: "husky" },
      { name: "代码规范", value: "EditorConfig + Prettier + ESLint" },
      { name: "提交规范", value: "Commitizen + CommitLint" },
      { name: "自动部署", value: "Centos + Jenkins + Nginx" }
    ]
    const dependencies = [
      { name: "animate.css", value: "^4.1.1" },
      { name: "wangeditor", value: "^4.7.9" },
      { name: "axios", value: "0.21.1" },
      { name: "core-js", value: "3.17.3" },
      { name: "dayjs", value: "1.10.7" },
      { name: "echarts", value: "5.2.1" },
      { name: "element-plus", value: "1.0.2-beta.62" },
      { name: "normalize.css", value: "8.0.1" },
      { name: "serve", value: "12.0.1" },
      { name: "vue", value: "3.2.4" },
      { name: "vue-router", value: "4.0.11" },
      { name: "vuex", value: "4.0.2" }
    ]
    const devDependencies = [
      { name: "@commitlint/cli", value: "^13.1.0" },
      { name: "@commitlint/config-conventional", value: "^13.1.0" },
      { name: "@typescript-eslint/eslint-plugin", value: "^4.18.0" },
      { name: "@typescript-eslint/parser", value: "^4.18.0" },
      { name: "@vue/cli-plugin-babel", value: "~4.5.0" },
      { name: "@vue/cli-plugin-eslint", value: "^~4.5.0" },
      { name: "@vue/cli-plugin-typescript", value: "~4.5.0" },
      { name: "@vue/cli-service", value: "~4.5.0" },
      { name: "@vue/compiler-sfc", value: "^3.2.4" },
      { name: "@vue/eslint-config-prettier", value: "^6.0.0" },
      { name: "@vue/eslint-config-typescript", value: "^7.0.0" },
      { name: "babel-plugin-import", value: "^1.13.3" },
      { name: "commitizen", value: "^4.2.4" },
      { name: "cz-conventional-changelog", value: "^3.3.0" },
      { name: "eslint", value: "^6.7.2" },
      { name: "eslint-plugin-prettier", value: "^3.3.1" },
      { name: "eslint-plugin-vue", value: "^7.0.0" },
      { name: "husky", value: "^7.0.0" },
      { name: "less", value: "^3.0.4" },
      { name: "less-loader", value: "^5.0.0" },
      { name: "prettier", value: "^2.3.2" },
      { name: "typescript", value: "~4.1.5" }
    ]
    let isShow = ref(false)
    onMounted(() => {
      isShow.value = true
    })
    onUnmounted(() => {
      isShow.value = false
    })

    return { techniques, dependencies, devDependencies, isShow }
  }
})
</script>

<style scoped lang="less">
.box-card {
  width: 100%;
  .about-content {
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-header-title {
    padding: 10px 0;
    font-size: 14px;
    font-weight: 500;
    color: #050e16;
  }
  .standard {
    font-size: 12px;
    padding: 10px 20px;
    text-align: left;
    background-color: #fafafa;
    .key {
      color: #9ea099;
      font-size: 14px;
      .key-item {
        margin-top: 20px;
        text-align: left;
      }
    }
    .value {
      .value-item {
        margin-top: 20px;
      }
    }
  }
}

.techniques-info {
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #fafafa;
  .techniques-info-item {
    margin-right: 40px;
    margin-top: 10px;
    padding: 5px 0;
  }
}

.constructionText {
  display: flex;
  justify-content: left;
  align-items: center;
}

.construction {
  font-weight: 600;
  text-align: left;
  background-color: #8b919b;
}
</style>
