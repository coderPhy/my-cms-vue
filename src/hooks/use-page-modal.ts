import { ref } from "vue"

import pageModal from "@/components/page-modal"

type CallbackFn = (value?: any) => void

export function usePageModal(
  newCallback?: CallbackFn,
  editCallback?: CallbackFn
) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const defaultInfo = ref({})
  const handleNewDate = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    newCallback && newCallback()
  }
  const handleEditDate = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    editCallback && editCallback(item)
  }
  return [pageModalRef, defaultInfo, handleNewDate, handleEditDate]
}
