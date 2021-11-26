<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="item in breadCrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path ?? '' }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

import { IBreadcrumb } from "../types"

export default defineComponent({
  props: {
    breadCrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
