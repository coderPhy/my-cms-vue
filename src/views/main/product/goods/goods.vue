<template>
  <div class="goods">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      @newBtnClick="handleNewDate"
      @editBtnClick="handleEditDate"
    >
      <template #image="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #oldPrice="scope"> {{ "$" + scope.row.oldPrice }} </template>
    </page-content>
    <page-modal
      ref="pageModalRef"
      pageName="goods"
      :defaultInfo="defaultInfo"
      :modalFormConfig="modalFormConfig"
    >
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import pageSearch from "@/components/page-search"
import pageContent from "@/components/page-content"
import pageModal from "@/components/page-modal"

import { contentTableConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"
import { modalFormConfig } from "./config/modal.config"

import { usePageSearch } from "@/hooks/use-page-search"
import { usePageModal } from "@/hooks/use-page-modal"

export default defineComponent({
  name: "goods",
  components: {
    pageContent,
    pageSearch,
    pageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModalRef, defaultInfo, handleNewDate, handleEditDate] =
      usePageModal()

    return {
      pageContentRef,
      pageModalRef,
      contentTableConfig,
      searchFormConfig,
      modalFormConfig,
      defaultInfo,
      handleResetClick,
      handleQueryClick,
      handleNewDate,
      handleEditDate
    }
  }
})
</script>

<style scoped></style>
