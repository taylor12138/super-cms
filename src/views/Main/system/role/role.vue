<template>
  <div class="role">
    <complete-form
      :FormItems="FormData.FormItems"
      @ResetHandleCilck="ResetCallback"
      @searchHandleClick="searchCallback"
    />
    <complete-table
      :TableData="TableData"
      pageName="role"
      ref="tableRef"
      @newBtnClick="newBtnClick"
      @editBtnClick="editBtnClick"
    />
    <dialog-module
      :dialogConfig="dialogConfig"
      ref="dialogModuleRef"
      :editData="editData"
      pageName="role"
      :otherInfo="otherInfo"
    >
      <div class="dialog-menu">
        <el-tree
          :data="menu"
          :props="{ children: 'children', label: 'name' }"
          show-checkbox
          node-key="id"
          @check="handleTreeCheck"
        />
      </div>
    </dialog-module>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import { useStore } from 'vuex'
import { ElTree } from 'element-plus'

import CompleteTable from '@/components/complete-table'
import CompleteForm from '@/components/complete-form'
import DialogModule from '@/components/dialog-module'
import * as config from './config'
import * as dialogConfig from './dialog.config'
import useDialog from '@/hooks/useDialog'
import useSearch from '@/hooks/useSearch'
import menuLeaves from '@/untils/menu-leaves'

export default defineComponent({
  name: 'role',
  setup() {
    const { TableData } = config
    const { FormData } = config
    // 搜索功能hook
    const { ResetCallback, searchCallback, tableRef } = useSearch()

    // 新建、编辑功能hook
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCb = (item: any) => {
      console.log(item)
      const leaves = menuLeaves(item.menuList)
      nextTick(() => {
        // 放到nextTick中，因为此时还无法获取到elTreeRef
        elTreeRef.value?.setCheckedKeys(leaves, false)
      })
    }
    const { dialogModuleRef, newBtnClick, editBtnClick, editData } = useDialog(
      undefined,
      editCb
    )

    // 获取完整的菜单数据
    const store = useStore()
    const menu = computed(() => store.state.entireMenu)

    //插入树状权限分配slot的props
    const otherInfo = ref({})
    const handleTreeCheck = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      FormData,
      TableData,
      dialogConfig,
      dialogModuleRef,
      newBtnClick,
      editBtnClick,
      editData,
      ResetCallback,
      searchCallback,
      tableRef,
      menu,
      handleTreeCheck,
      otherInfo,
      elTreeRef
    }
  },
  components: {
    CompleteTable,
    CompleteForm,
    DialogModule
  }
})
</script>

<style scoped lang="less">
.dialog-menu {
  margin-left: 35px;
}
</style>
