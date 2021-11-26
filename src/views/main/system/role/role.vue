<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="role"
      headerBtnText="新建角色"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewDate"
      @editBtnClick="handleEditDate"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      pageName="role"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :modalFormConfig="modalFormConfig"
    >
      <div class="menu-list">
        <el-tree
          ref="elTreeRef"
          :data="entirMenu"
          show-checkbox
          node-key="id"
          :props="{
            label: 'name',
            children: 'children'
          }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from "vue"
import { useStore } from "@/store"

import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import PageModal from "@/components/page-modal"
import { ElTree } from "element-plus"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalFormConfig } from "./config/modal.config"

import { usePageSearch } from "@/hooks/use-page-search"
import { usePageModal } from "@/hooks/use-page-modal"

import { menuMapLeafKeys } from "@/utils/map-menus"

export default defineComponent({
  name: "role",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const store = useStore()
    const elTreeRef = ref<InstanceType<typeof ElTree>>()

    const entirMenu = computed(() => {
      return store.state.entirMenu
    })

    const otherInfo = ref({})
    const handleCheckChange = (value1: any, value2: any) => {
      // 选中
      const checkedKeys = value2.checkedKeys
      // 半选中
      const halfCheckedKeys = value2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    const defaultCheckedKeys = ref<any>([])
    const editCallback = (item: any) => {
      const leafKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const newCallback = () => {
      // defaultCheckedKeys.value = []
    }

    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModalRef, defaultInfo, handleNewDate, handleEditDate] =
      usePageModal(newCallback, editCallback)

    return {
      pageContentRef,
      pageModalRef,
      elTreeRef,
      contentTableConfig,
      searchFormConfig,
      modalFormConfig,
      defaultInfo,
      entirMenu,
      otherInfo,
      handleCheckChange,
      handleResetClick,
      handleQueryClick,
      handleNewDate,
      handleEditDate,
      defaultCheckedKeys
    }
  }
})
</script>

<style scoped lang="less">
.menu-list {
  margin-left: 25px;
}
</style>
