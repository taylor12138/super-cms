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
      @newBtnClick="newBtnClick"
      @editBtnClick="editBtnClick"
    ></complete-table>
    <dialog-module
      :dialogConfig="dialogConfigRef"
      ref="dialogModuleRef"
      :editData="editData"
      pageName="users"
    ></dialog-module>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import CompleteForm from '@/components/complete-form'
import CompleteTable from '@/components/complete-table'
import DialogModule from '@/components/dialog-module'
import * as config from './config'
import * as dialogConfig from './dialog.config'
import useSearch from '@/hooks/useSearch'
import useDialog from '@/hooks/useDialog'

export default defineComponent({
  name: 'user',
  setup() {
    // 表单数据
    const { FormData } = config
    const { TableData } = config

    // 搜索功能hook
    const { ResetCallback, searchCallback, tableRef } = useSearch()

    //新建|编辑功能hook
    // 1.删除掉密码栏的回调
    const newCb = () => {
      const passItem = dialogConfig.FormData.formItems.find(
        (item) => item.field === 'password'
      )
      passItem!.isHidden = false
    }
    const editCb = () => {
      const passItem = dialogConfig.FormData.formItems.find(
        (item) => item.field === 'password'
      )
      passItem!.isHidden = true
    }
    // 2.功能hook
    const { dialogModuleRef, newBtnClick, editBtnClick, editData } = useDialog(
      newCb,
      editCb
    )
    // 3.根据vuex得到的后端数据动态添加部门、角色列表
    const store = useStore()
    // 为了防止异步请求的延迟，将配置更改也变成响应式的，随之改变
    const dialogConfigRef = computed(() => {
      const departmentItem = dialogConfig.FormData.formItems.find((item) => {
        return item.field === 'departmentId'
      })
      if (departmentItem) {
        departmentItem.selectorOptions = store.state.entireDepartment.map(
          (item: any) => ({
            title: item.name,
            value: item.id
          })
        )
      }
      const roleItem = dialogConfig.FormData.formItems.find((item) => {
        return item.field === 'roleId'
      })
      if (roleItem) {
        roleItem.selectorOptions = store.state.entireRole.map((item: any) => ({
          title: item.name,
          value: item.id
        }))
      }
      return dialogConfig
    })
    return {
      FormData,
      TableData,
      tableRef,
      ResetCallback,
      searchCallback,
      dialogConfigRef,
      dialogModuleRef,
      newBtnClick,
      editBtnClick,
      editData
    }
  },
  components: {
    CompleteForm,
    CompleteTable,
    DialogModule
  }
})
</script>

<style scoped></style>
