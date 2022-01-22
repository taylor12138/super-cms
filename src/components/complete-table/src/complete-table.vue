<template>
  <div class="table-content">
    <cms-table :formList="userList" v-bind="TableData">
      <!-- header插槽 -->
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>
      <!-- 列中的插槽 -->
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
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
import { useStore } from 'vuex'
import { Edit, Delete } from '@element-plus/icons-vue'

import cmsTable, { ITable } from '@/components/cms-table'

export default defineComponent({
  props: {
    TableData: {
      type: Object as PropType<ITable>,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    // 使用vuex方法
    const store = useStore()
    store.dispatch('system/getPageDataAction', {
      pageName: props.pageName,
      queryOtions: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() =>
      store.getters['system/getList'](props.pageName)
    )
    const userCount = computed(() => store.state.system.userCount)
    return {
      userList,
      userCount
    }
  },
  components: {
    cmsTable,
    Edit,
    Delete
  }
})
</script>

<style scoped lang="less">
.table-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
