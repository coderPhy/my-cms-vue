<template>
  <div class="login-phone">
    <el-form label-width="70px" :rules="rules" :model="account">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="account.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <div class="get-code">
          <el-input v-model="account.verifyCode"></el-input>
          <el-button type="primary" size="mini" class="get-btn"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

export default defineComponent({
  setup() {
    const account = reactive({
      phone: "",
      verifyCode: ""
    })

    const rules = {
      phone: [
        {
          required: true,
          message: "手机号码是必填的~",
          trigger: "blur"
        },
        {
          pattern: /^[0-9]{11}$/,
          message: "手机号码是11位数字",
          trigger: "blur"
        }
      ],
      verifyCode: [
        {
          required: true,
          message: "验证码是必填的~",
          trigger: "blur"
        },
        {
          pattern: /^[0-9]{4}$/,
          message: "验证码4位数字",
          trigger: "blur"
        }
      ]
    }

    // const rules = {}

    return {
      account,
      rules
    }
  }
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
