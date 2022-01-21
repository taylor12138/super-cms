<template>
  <div>
    <el-table
      :data="formList"
      border
      style="width: 100%"
      @selection-change="handleSelsction"
    >
      <el-table-column
        v-if="showSelectColomn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <template v-for="propItem in propList" , :key="propItem.props">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
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
    propList: {
      type: Array,
      require: true
    },
    showSelectColomn: {
      type: Boolean,
      default: false
    }
  },
  emits: ['handleSelsction'],
  setup(props, { emit }) {
    const handleSelsction = (value: any) => {
      console.log(value)
      emit('handleSelsction', value)
    }

    return {
      handleSelsction
    }
  }
})
</script>

<style scoped></style>
