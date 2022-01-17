<template>
  <div class="login">
    <login-detail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginDetail from './cpns/login-detail.vue'

export default defineComponent({
  name: 'Login',
  components: { loginDetail }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: center / 100% url('~@/assets/img/back.jpg');
}
</style>
