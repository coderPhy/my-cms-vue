<template>
  <div class="department">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="department"
      headerBtnText="新建部门"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewDate"
      @editBtnClick="handleEditDate"
    >
    </page-content>

    <page-modal
      ref="pageModalRef"
      pageName="department"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :modalFormConfig="modalFormConfig"
    >
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

import pageSearch from "@/components/page-search"
import pageContent from "@/components/page-content"
import pageModal from "@/components/page-modal"
import { ElTree } from "element-plus"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalFormConfig } from "./config/modal.config"

import { usePageSearch } from "@/hooks/use-page-search"
import { usePageModal } from "@/hooks/use-page-modal"

export default defineComponent({
  name: "department",
  components: {
    pageSearch,
    pageContent,
    pageModal
  },
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const otherInfo = ref({})

    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModalRef, defaultInfo, handleNewDate, handleEditDate] =
      usePageModal()

    return {
      pageContentRef,
      pageModalRef,
      elTreeRef,
      searchFormConfig,
      contentTableConfig,
      modalFormConfig,
      defaultInfo,
      otherInfo,
      handleResetClick,
      handleQueryClick,
      handleNewDate,
      handleEditDate
    }
  }
})
</script>

<style scoped></style>
