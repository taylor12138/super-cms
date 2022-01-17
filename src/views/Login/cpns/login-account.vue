<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="user" ref="accountForm">
      <el-form-item label="账号" prop="account">
        <el-input v-model="user.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" show-password></el-input>
      </el-form-item>
    </el-form>
    <div class="pass-control">
      <el-checkbox v-model="isRemember" label="记住密码"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" @click="loginAction">登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import { useStore } from 'vuex'

import cache from '@/untils/cache'

export default defineComponent({
  setup() {
    const user = reactive({
      account: cache.getCache('account') ?? '',
      password: cache.getCache('password') ?? ''
    })
    const isRemember = ref(false)
    const accountForm = ref<InstanceType<typeof ElForm>>()
    const store = useStore()

    const loginAction = () => {
      // 判断输入的正确性
      accountForm.value?.validate((valid) => {
        if (valid) {
          // 先判断是否记住密码
          if (isRemember.value) {
            cache.setCache('account', user.account)
            cache.setCache('password', user.password)
            console.log('保存成功')
          }
        } else {
          cache.removeCache('account')
          cache.removeCache('password')
          alert('输入内容非法')
        }
      })
      // 进行登陆验证
      store.dispatch('login/loginAccountAction', { ...user })
    }
    return {
      user,
      rules,
      isRemember,
      loginAction,
      accountForm
    }
  }
})
</script>

<style scoped>
.login-account {
  padding-top: 10px;
}
.pass-control {
  display: flex;
  justify-content: space-between;
}
</style>
