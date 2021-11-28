<template>
  <div class="page-content">
    <hy-table
      v-bind="contentTableConfig"
      :listData="dataList"
      :dataCount="dataCount"
      v-model:page="pageInfo"
      @selectionChange="selectionChange"
    >
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          type="primary"
          size="medium"
          @click="handleNewClick"
          >{{ headerBtnText }}</el-button
        >
      </template>
      <template #content="scope">
        <div v-html="scope.row.content"></div>
      </template>
      <template #enable="scope">
        <el-button
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
        >
      </template>
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #handle="scope">
        <el-button
          v-if="isUpdate"
          @click="handleEditClick(scope.row)"
          type="text"
          sie="mini"
          icon="el-icon-edit"
          >修改</el-button
        >
        <el-button
          v-if="isDelete"
          @click="handleDeleteClick(scope.row)"
          type="text"
          sie="mini"
          icon="el-icon-delete"
          >删除</el-button
        >
      </template>
      <template #footer></template>

      <!-- 为不固定的插槽设置的动态插槽 -->
      <template
        v-for="item in outerPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue"

import { usePermission } from "@/hooks/use-permission"
import { useStore } from "@/store"

import hyTable from "@/base-ui/table"

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    headerBtnText: {
      type: String,
      default: "新建"
    }
  },
  components: {
    hyTable
  },
  emits: ["newBtnClick", "editBtnClick"],
  setup(props, { emit }) {
    const store = useStore()

    // 获取权限
    const isCreate = usePermission(props.pageName, "create")
    const isUpdate = usePermission(props.pageName, "update")
    const isDelete = usePermission(props.pageName, "delete")
    const isQuery = usePermission(props.pageName, "query")

    // 1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => {
      getPageData()
    })

    // 2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData({})

    // 3.从vuex中获取数据
    const dataList = computed(() => {
      return store.getters["system/pageListData"](props.pageName)
    })

    const dataCount = computed(() =>
      store.getters["system/pageListCount"](props.pageName)
    )

    const selectionChange = (value: any) => {
      //
    }

    // 4.获取其他的动态插槽名称
    const outerPropSlots = props.contentTableConfig.propList.filter(
      (item: any) => {
        if (item.slotName === "createAt") return false
        if (item.slotName === "enable") return false
        if (item.slotName === "updateAt") return false
        if (item.slotName === "handle") return false
        if (item.slotName === "handle") return false
        if (item.slotName === "content") return false
        return true
      }
    )

    // 监听删除,新建,修改按钮的点击
    const handleDeleteClick = (item: any) => {
      store.dispatch("system/deletePageDataAction", {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      emit("newBtnClick")
    }
    const handleEditClick = (item: any) => {
      emit("editBtnClick", item)
    }

    return {
      dataList,
      dataCount,
      pageInfo,
      getPageData,
      outerPropSlots,
      selectionChange,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: solid 20px #f5f5f5;
}
</style>
