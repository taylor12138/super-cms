<template>
  <div class="user">
    <complete-form
      :FormItems="FormData.FormItems"
      @ResetHandleCilck="ResetCallback"
      @searchHandleClick="searchCallback"
    />
    <complete-table
      :TableData="TableData"
      pageName="users"
      ref="tableRef"
    ></complete-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CompleteForm from '@/components/complete-form'
import CompleteTable from '@/components/complete-table'
import * as config from './config'
import useSearch from '@/hooks/useSearch'

export default defineComponent({
  name: 'user',
  setup() {
    // 表单数据
    const { FormData } = config
    const { TableData } = config
    // 搜索功能hook
    const { ResetCallback, searchCallback, tableRef } = useSearch()
    return {
      FormData,
      TableData,
      tableRef,
      ResetCallback,
      searchCallback
    }
  },
  components: {
    CompleteForm,
    CompleteTable
  }
})
</script>

<style scoped></style>
