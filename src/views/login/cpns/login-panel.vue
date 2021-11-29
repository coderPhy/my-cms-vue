<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs v-model="currentTab" type="border-card" :stretch="true">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user"></i>账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i>手机登录</span>
        </template>
        <login-phone res="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeppPassword" label="记住密码"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button
      type="primary"
      size="medium"
      class="login-btn"
      @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import loginAccount from "./login-account.vue"
import loginPhone from "./login-phone.vue"

export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    // 定义属性
    const currentTab = ref<string>("account")
    const isKeppPassword = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()

    // 定义方法
    const handleLoginClick = () => {
      if (currentTab.value === "account") {
        accountRef.value?.loginAction(isKeppPassword.value)
      } else {
        //
      }
    }

    return {
      accountRef,
      phoneRef,
      isKeppPassword,
      currentTab,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
