import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import localCache from "@/utils/cache"
import { firstMenu } from "@/utils/map-menus"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    name: "login",
    path: "/login",
    component: () => {
      return import("@/views/login/login.vue")
    }
  },
  {
    name: "main",
    path: "/main",
    component: () => {
      return import("@/views/main/main.vue")
    }
  },
  {
    name: "not-found",
    path: "/:pathMatch(.*)*",
    component: () => {
      return import("@/views/not-found/not-found.vue")
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }
  if (to.path === "/main") {
    return firstMenu.url
  }
})

export default router
