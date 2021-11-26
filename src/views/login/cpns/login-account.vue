<template>
  <div class="login-account">
    <el-form ref="formRef" label-width="70px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"

import LocalCache from "@/utils/cache"
import { rules } from "../config/account-config"

import { ElForm } from "element-plus"
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const store = useStore()

    const formRef = ref<InstanceType<typeof ElForm>>()

    const account = reactive({
      name: LocalCache.getCache("name") ?? "",
      password: LocalCache.getCache("password") ?? ""
    })

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        // 验证通过
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            LocalCache.setCache("name", account.name)
            LocalCache.setCache("password", account.password)
          } else {
            LocalCache.deleteCache("name")
            LocalCache.deleteCache("password")
          }
          // 2. 开始进行登录验证
          store.dispatch("login/accountLoginAction", { ...account })
        }
      })
    }

    return {
      formRef,
      account,
      rules,
      loginAction
    }
  }
})
</script>

<style scoped></style>
