<template>
  <el-dropdown :hide-on-click="false">
    <span class="el-dropdown-link">
      <el-avatar
        :size="30"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <span class="user-name">{{ name }}</span
      ><el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleExitClick"> 退出登录</el-dropdown-item>
        <el-dropdown-item divided>敬请期待</el-dropdown-item>
        <el-dropdown-item>敬请期待</el-dropdown-item>
        <el-dropdown-item>敬请期待</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

import { useMyStore } from '@/store'
import LocalCache from '@/untils/cache'

export default defineComponent({
  components: {
    ArrowDown
  },
  setup() {
    const store = useMyStore()
    const name = computed(() => store.state.login.userInfo.name)

    const router = useRouter()
    const handleExitClick = () => {
      LocalCache.removeCache('token')
      router.push('/main')
    }
    return {
      name,
      handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  .user-name {
    margin-left: 5px;
  }
}
</style>
