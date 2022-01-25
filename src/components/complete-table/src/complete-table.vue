<template>
  <div class="table-content">
    <cms-table
      :formList="pageList"
      v-bind="TableData"
      :formCount="pageCount"
      @handleCurrentChange="CurrentPageCallback"
    >
      <!-- header插槽 -->
      <template #headerHandler v-if="isCreate">
        <el-button type="primary" @click="newBtnClick">新建用户</el-button>
      </template>
      <!-- 列中的插槽 -->
      <!-- 1.状态插槽 -->
      <template #enable="scope">
        <el-button
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <!-- 2.日期插槽 -->
      <template #createAt="scope">
        <strong>{{ $filter.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filter.formatTime(scope.row.updateAt) }}</strong>
      </template>
      <!-- 3.图片插槽 -->
      <template #imgUrl="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :initial-index="1"
        >
        </el-image>
      </template>
      <!-- 4.价格插槽 -->
      <template #oldPrice="scope">
        <span>{{ '￥' + scope.row.oldPrice }}</span>
      </template>
      <template #newPrice="scope">
        <span>{{ '￥' + scope.row.newPrice }}</span>
      </template>
      <!-- 5.编辑插槽 -->
      <template #operation="scope">
        <el-button
          size="small"
          v-if="isUpdate"
          @click="editBtnClick(scope.row)"
        >
          <el-icon> <edit /></el-icon>编辑
        </el-button>
        <el-button
          size="small"
          v-if="isDelete"
          @click="handleDeleteClick(scope.row)"
        >
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
import usePermission from '@/hooks/usePermission'

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
  emit: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    // 使用vuex方法
    const store = useStore()
    //获取权限
    const isCreate = usePermission(props.pageName || '', 'create') //创建
    const isUpdate = usePermission(props.pageName || '', 'update') //更新
    const isDelete = usePermission(props.pageName || '', 'delete') //删除
    const isQuery = usePermission(props.pageName || '', 'query') //查询
    // 网络请求
    const getData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch('system/getPageDataAction', {
        pageName: props.pageName,
        queryOtions: {
          offset: 0,
          size: 10,
          ...queryInfo
        }
      })
    }
    getData()
    // 当前页数发生变化
    const CurrentPageCallback = (currentPage: number) => {
      console.log(currentPage)
      getData({
        offset: (currentPage - 1) * 10
      })
      console.log(currentPage)
    }
    // 表单信息
    const pageList = computed(() =>
      store.getters['system/getList'](props.pageName)
    )
    // 列表总数
    const pageCount = computed(() =>
      store.getters['system/getCount'](props.pageName)
    )
    // 删除 | 编辑操作
    const handleDeleteClick = (item: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    const newBtnClick = () => {
      emit('newBtnClick')
    }
    const editBtnClick = (item: any) => {
      emit('editBtnClick', item)
    }
    return {
      pageList,
      pageCount,
      getData,
      CurrentPageCallback,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      newBtnClick,
      editBtnClick
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
