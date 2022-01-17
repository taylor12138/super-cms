<template>
  <div class="login-detail">
    <h1>Login</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>账号登陆
          </span>
        </template>
        <login-account />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><cellphone /></el-icon>手机号登陆
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Avatar, Cellphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: { Avatar, Cellphone, LoginAccount, LoginPhone },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login-detail {
  width: 340px;
  text-align: center;
  margin-bottom: 150px;
}
</style>
