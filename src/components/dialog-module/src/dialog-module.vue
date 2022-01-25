<template>
  <div class="dialog-tip">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <search-form
        v-bind="dialogConfig.FormData"
        v-model="FormField"
      ></search-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import { SearchForm } from '@/components/search-form'

export default defineComponent({
  components: {
    SearchForm
  },
  props: {
    dialogConfig: {
      type: Object,
      require: true
    },
    editData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    // 新建用户弹窗
    const dialogVisible = ref(false)
    // 编辑窗口的数据
    const FormField = ref<any>({ ...props.editData })
    watch(
      () => props.editData,
      (newValue) => {
        for (const item of props.dialogConfig?.FormData.formItems) {
          FormField.value[item.field] = newValue[item.field]
        }
      }
    )
    return {
      dialogVisible,
      FormField
    }
  }
})
</script>

<style scoped></style>
