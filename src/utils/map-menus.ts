import type { RouteRecordRaw } from "vue-router"

import { IBreadcrumb } from "@/base-ui/breadcrumb"

let firstMenu: any = ""

export function mapMenusToRoutes(useMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context("../router/main", true, /\.ts/)

  routeFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.slice(1))
    allRoutes.push(route.default)
  })

  const _recurseGetRpute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        if (route) {
          routes.push(route)
        }
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRpute(menu.children)
      }
    }
  }

  _recurseGetRpute(useMenus)
  // 根据菜单获取需要添加的routes
  return routes
}

export function pathMapToMeun(
  useMenus: any[],
  currentPath: string,
  breadCrumbs?: IBreadcrumb[]
): any {
  for (const menu of useMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMeun(menu.children ?? [], currentPath)
      if (findMenu) {
        breadCrumbs?.push({ name: menu.name })
        breadCrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
  return breadCrumbs
}

export function pathMapBreadCrumds(useMenus: any[], currentPath: string): any {
  const breadCrumds: IBreadcrumb[] = []
  pathMapToMeun(useMenus, currentPath, breadCrumds)
  return breadCrumds
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }

  _recurseGetPermission(userMenus)
  return permissions
}

export function menuMapLeafKeys(menuList: any[]): number[] {
  const leftKeys: number[] = []

  const _recuresGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recuresGetLeaf(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recuresGetLeaf(menuList)

  return leftKeys
}

export { firstMenu }
