<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick">
      <d-arrow-right v-if="isFold" />
      <d-arrow-left v-else />
    </el-icon>
    <div class="content">
      <div>
        <my-bread-crumb :breadcrumbs="breadcrumbs" />
      </div>
      <div>
        <user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

import { myBreadCrumb } from '@/components/breadcrumb'
import { useMyStore } from '@/store'
import UserInfo from './user-info.vue'
import MapPathBread from '@/untils/path-bread'

export default defineComponent({
  emits: ['changeFoldStatus'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('changeFoldStatus', isFold.value)
    }

    // 面包屑数据
    const route = useRoute()
    const store = useMyStore()
    const Menu = store.state.login.userMenu
    const breadcrumbs = computed(() => {
      return MapPathBread(route.path, Menu)
    })

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  },
  components: {
    DArrowLeft,
    DArrowRight,
    UserInfo,
    myBreadCrumb
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;
  .el-icon {
    font-size: 25px;
    cursor: pointer;
  }
  .content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
  }
}
</style>
