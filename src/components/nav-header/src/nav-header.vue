<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick">
      <d-arrow-left v-if="isFold" />
      <d-arrow-right v-else />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'

export default defineComponent({
  emits: ['changeFoldStatus'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('changeFoldStatus', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  },
  components: {
    DArrowLeft,
    DArrowRight
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  .el-icon {
    width: 100%;
    font-size: 25px;
    cursor: pointer;
  }
}
</style>
