<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="formList"
      border
      style="width: 100%"
      @selection-change="handleSelsction"
      row-key="id"
    >
      <el-table-column
        v-if="showSelectColomn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <template v-for="propItem in propList" , :key="propItem.props">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="formCount"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    formList: {
      type: Array,
      require: true
    },
    formCount: {
      type: Number,
      require: true
    },
    propList: {
      type: Array,
      require: true
    },
    showSelectColomn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['handleSelsction', 'handleCurrentChange'],
  setup(props, { emit }) {
    // 选中框事件
    const handleSelsction = (value: any) => {
      console.log(value)
      emit('handleSelsction', value)
    }
    // 表格页数变化事件
    const handleCurrentChange = (currentPage: number) => {
      console.log(currentPage, 'cms-table')

      emit('handleCurrentChange', currentPage)
    }
    return {
      handleSelsction,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
