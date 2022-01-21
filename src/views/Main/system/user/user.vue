<template>
  <div class="user">
    <complete-form :FormItems="FormData.FormItems" />
    <div class="content">
      <cms-table
        :formList="userList"
        :propList="propList"
        :showSelectColomn="showSelectColomn"
      >
        <template #enable="scope">
          <el-button
            size="small"
            :type="scope.row.enable ? 'success' : 'danger'"
            plain
            >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
          >
        </template>
        <template #createAt="scope">
          <strong>{{ $filter.formatTime(scope.row.createAt) }}</strong>
        </template>
        <template #updateAt="scope">
          <strong>{{ $filter.formatTime(scope.row.updateAt) }}</strong>
        </template>
        <template #operation>
          <el-button size="small">
            <el-icon> <edit /></el-icon>编辑
          </el-button>
          <el-button size="small">
            <el-icon> <delete /> </el-icon>删除
          </el-button>
        </template>
      </cms-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'

import CompleteForm from '@/components/complete-form'
import cmsTable from '@/components/cms-table'
import * as config from './config'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'user',
  setup() {
    // 表单数据
    const FormData = config.FormData
    // 使用vue方法
    const store = useStore()
    store.dispatch('system/getPageDataAction', {
      pageUrl: '/users/list',
      queryOtions: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
      {
        prop: 'realname',
        label: '姓名',
        minWidth: '100',
        slotName: 'realname'
      },
      {
        prop: 'cellphone',
        label: '手机号码',
        minWidth: '100',
        slotName: 'cellphone'
      },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'enable' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      },
      {
        label: '操作',
        minWidth: '150',
        slotName: 'operation'
      }
    ]
    const showSelectColomn = true
    return {
      FormData,
      userList,
      userCount,
      propList,
      showSelectColomn
    }
  },
  components: {
    CompleteForm,
    cmsTable,
    Edit,
    Delete
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
