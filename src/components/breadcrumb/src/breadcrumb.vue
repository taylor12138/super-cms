<template>
  <el-breadcrumb separator="/">
    <template v-for="bread in breadcrumbs" :key="bread.name">
      <el-breadcrumb-item :to="{ path: bread?.path }">
        {{ bread.name }}</el-breadcrumb-item
      >
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBread } from './types'

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBread[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
