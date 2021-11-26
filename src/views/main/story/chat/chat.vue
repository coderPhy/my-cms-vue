<template>
  <div class="chat">
    <div class="header">
      <el-row :gutter="10" class="left-header">
        <el-col :span="6" :offset="16">
          <el-input v-model="titleText" placeholder="Please input" clearable />
        </el-col>
        <el-col :span="2">
          <el-button
            type="primary"
            class="publish"
            round
            plain
            @click="btnClick"
            >发表</el-button
          >
        </el-col>
      </el-row>
    </div>
    <div class="body">
      <el-row :gutter="20">
        <el-col :span="12">
          <div ref="toolbarRef" class="toolbar-container"></div>
        </el-col>
        <el-col :span="12">
          <div ref="textRef" class="text-container" v-html="contentText"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue"
import E from "wangeditor"

import { createPageData } from "@/service/main/system/system"

export default defineComponent({
  name: "chat",
  setup() {
    const toolbarRef = ref<HTMLElement>()
    const textRef = ref<HTMLElement>()

    const titleText = ref("")
    const contentText = ref("")
    let editor: any
    onMounted(() => {
      editor = new E(toolbarRef.value, textRef.value)
      editor.config.height = 650
      editor.config.placeholder = "大声说出你的故事,让更多人知道你的传奇故事!"
      editor.config.focus = false
      editor.config.colors = ["#000000", "#eeece0", "#1c487f", "#4d80bf"]
      editor.config.onchange = function (value: any) {
        contentText.value = value
      }
      editor.create()
    })
    const btnClick = async () => {
      const result = await createPageData("/story", {
        title: titleText.value,
        content: contentText.value
      })
      if (!result.code) {
        console.log("发表成功")
      }
      editor.txt.clear()
    }
    return {
      toolbarRef,
      titleText,
      contentText,
      btnClick
    }
  }
})
</script>

<style scoped lang="less">
.chat {
  .header {
    .left-header {
      padding: 15px;
    }
  }
  .body {
    padding-bottom: 40px;
    .text-container {
      height: 200px;
      width: 100%;
      padding-top: 90px;
      background-color: antiquewhite;
    }
  }
}
</style>
