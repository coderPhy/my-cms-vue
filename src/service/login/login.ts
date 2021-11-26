import type { IAccount } from "./type"
import { IDataType } from "@/service/types"
import type { ILoginResult, UserInfo } from "@/store/login/types"
import hyRequest from "../index"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserMenus = "/role/"
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function RequestUserInfoById(id: number) {
  return hyRequest.get<IDataType<UserInfo>>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function RequestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu"
  })
}
