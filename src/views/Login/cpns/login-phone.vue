<template>
  <div class="login-phone">
    <el-form label-width="65px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="identify">
        <div class="identify">
          <el-input v-model="phone.identify" type="identify"></el-input>
          <el-button type="primary" @click="getIdentifyCode"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
      <el-button type="primary" @click="loginAction">登录</el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      identify: ''
    })
    const store = useStore()
    const getIdentifyCode = () => {
      console.log('获取验证码')
    }
    const loginAction = () => {
      store.dispatch('login/loginPhoneAction', { ...phone })
    }
    return {
      phone,
      rules,
      getIdentifyCode,
      loginAction
    }
  }
})
</script>

<style scoped lang="less">
.login-phone {
  padding-top: 10px;
}
.identify {
  display: flex;
  button {
    margin: 0px 10px;
  }
}
</style>
