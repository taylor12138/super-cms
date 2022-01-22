<template>
  <div class="role">
    <complete-form :FormItems="FormData.FormItems" />
    <complete-table :TableData="TableData" pageName="role" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CompleteTable from '@/components/complete-table'
import CompleteForm from '@/components/complete-form'
import * as config from './config'

export default defineComponent({
  name: 'role',
  setup() {
    const { TableData } = config
    const { FormData } = config
    return {
      FormData,
      TableData
    }
  },
  components: {
    CompleteTable,
    CompleteForm
  }
})
</script>

<style scoped></style>
