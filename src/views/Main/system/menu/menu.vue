<template>
  <div class="menu">
    <complete-table :TableData="TableData" pageName="menu"></complete-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import * as config from './config'
import CompleteTable from '@/components/complete-table'

export default defineComponent({
  name: 'my-menu',
  setup() {
    const { TableData } = config
    return { TableData }
  },
  components: {
    CompleteTable
  }
})
</script>

<style scoped></style>
