<template>
  <div class="goods">
    <complete-table :TableData="TableData" pageName="goods"></complete-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CompleteTable from '@/components/complete-table'
import * as config from './config'

export default defineComponent({
  name: 'goods',
  setup() {
    const { TableData } = config

    return {
      TableData
    }
  },
  components: {
    CompleteTable
  }
})
</script>

<style scoped></style>
