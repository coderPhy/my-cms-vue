<template>
  <div class="page-search">
    <hyform v-bind="searchFormConfig" v-model="formData" ref="hyform">
      <template #header>
        <h1 class="title">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </hyform>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import hyform from "@/base-ui/form"

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    hyform
  },
  emits: ["resetBtnClick", "queryBtnClick"],
  setup(props, { emit }) {
    // 双向绑定的属性应该是有配置文件的field类决定的
    // forData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ""
    }

    const formData = ref(formOriginData)

    // 当用户点击重置
    const handleResetClick = () => {
      formData.value = formOriginData
      emit("resetBtnClick")
    }

    // 当用户点击搜索
    const handleQueryClick = () => {
      emit("queryBtnClick", formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less">
.title {
  color: aquamarine;
}

.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
