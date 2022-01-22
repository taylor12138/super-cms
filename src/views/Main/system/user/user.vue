<template>
  <div class="user">
    <complete-form :FormItems="FormData.FormItems" />
    <complete-table :TableData="TableData" pageName="users"></complete-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CompleteForm from '@/components/complete-form'
import CompleteTable from '@/components/complete-table'
import * as config from './config'

export default defineComponent({
  name: 'user',
  setup() {
    // 表单数据
    const { FormData } = config
    const { TableData } = config
    return {
      FormData,
      TableData
    }
  },
  components: {
    CompleteForm,
    CompleteTable
  }
})
</script>

<style scoped></style>
