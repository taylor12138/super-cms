<template>
  <div class="search">
    <search-form :formItems="FormItems" v-model="FormField">
      <template #header>
        <div class="header">检索功能</div>
      </template>
      <template #footer>
        <div class="footer">
          <el-button @click="ResetHandleCilck">Reset</el-button>
          <el-button type="primary" @click="searchHandleClick"
            >Search</el-button
          >
        </div>
      </template>
    </search-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'

import { SearchForm, IFormItem } from '@/components/search-form'

export default defineComponent({
  props: {
    FormItems: {
      type: Array as PropType<IFormItem[]>,
      require: true
    }
  },
  emit: ['ResetHandleCilck', 'searchHandleClick'],
  setup(props, { emit }) {
    const originField: any = {}
    // 动态获取FormField属性名
    const arr = props.FormItems || []
    for (const item of arr) {
      const field = item.field
      originField[field] = ''
    }
    // 表单field数据, 这里用ref是因为reactive在v-model使用双向绑定的时候有可能会有些问题
    const FormField = ref(originField)

    // 重置函数
    const ResetHandleCilck = () => {
      for (const key in FormField.value) {
        FormField.value[key] = originField[key]
      }
      // FormField.value = originField
      emit('ResetHandleCilck')
    }
    //搜索函数
    const searchHandleClick = () => {
      emit('searchHandleClick', FormField.value)
    }

    return {
      FormField,
      ResetHandleCilck,
      searchHandleClick
    }
  },
  components: {
    SearchForm
  }
})
</script>

<style scoped lang="less">
.header,
.footer {
  padding: 15px;
  font-size: 30px;
  font-weight: 800;
}
</style>
