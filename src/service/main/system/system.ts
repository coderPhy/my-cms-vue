import hyRequert from "../../index"

import { IDataType } from "../../types"

export function getPageListData(url: string, queryInfo: any) {
  return hyRequert.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return hyRequert.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return hyRequert.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return hyRequert.patch<IDataType>({
    url,
    data: editData
  })
}
