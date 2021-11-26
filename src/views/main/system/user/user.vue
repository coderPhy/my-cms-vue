<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="users"
      headerBtnText="新建用户"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewDate"
      @editBtnClick="handleEditDate"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      pageName="users"
      :defaultInfo="defaultInfo"
      :modalFormConfig="modalFormConfigRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"

import pageSearch from "@/components/page-search"
import pageContent from "@/components/page-content"
import pageModal from "@/components/page-modal"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalFormConfig } from "./config/modal.config"

import { usePageSearch } from "@/hooks/use-page-search"
import { usePageModal } from "@/hooks/use-page-modal"

export default defineComponent({
  name: "users",
  components: {
    pageSearch,
    pageContent,
    pageModal
  },
  setup() {
    const store = useStore()
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    // pageModal相关的hook逻辑
    const newCallback = () => {
      const passwordItem = modalFormConfig.formItems.find((item) => {
        return item.field === "password"
      })
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalFormConfig.formItems.find((item) => {
        return item.field === "password"
      })
      passwordItem!.isHidden = true
    }
    const [pageModalRef, defaultInfo, handleNewDate, handleEditDate] =
      usePageModal(newCallback, editCallback)

    const modalFormConfigRef = computed(() => {
      const departmentItem = modalFormConfig.formItems.find((item) => {
        return item.field === "departmentId"
      })

      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { label: item.name, value: item.id }
      })
      const roleItem = modalFormConfig.formItems.find((item) => {
        return item.field === "roleId"
      })

      roleItem!.options = store.state.entirRole.map((item) => {
        return { label: item.name, value: item.id }
      })
      return modalFormConfig
    })

    return {
      pageContentRef,
      pageModalRef,
      searchFormConfig,
      contentTableConfig,
      modalFormConfigRef,
      defaultInfo,
      handleResetClick,
      handleQueryClick,
      handleNewDate,
      handleEditDate
    }
  }
})
</script>

<style scoped lang="less"></style>
