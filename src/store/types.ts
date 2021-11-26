import { ILoginState } from "@/store/login/types"
import { ISystemState } from "@/store/main/system/types"
import { IDashboardState } from "@/store/analysis/types"

export interface IRootState {
  entireDepartment: any[]
  entirRole: any[]
  entirMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
