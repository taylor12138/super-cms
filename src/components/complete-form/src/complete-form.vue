<template>
  <div class="search">
    <search-form :formItems="FormItems" v-model="FormField">
      <template #header>
        <div class="header">检索功能</div>
      </template>
      <template #footer>
        <div class="footer">
          <el-button>Reset</el-button>
          <el-button type="primary">Search</el-button>
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
  setup(props) {
    const originField: any = {}
    // 动态获取FormField属性名
    const arr = props.FormItems || []
    for (const item of arr) {
      const field = item.field
      originField[field] = ''
    }
    // 表单field数据, 这里用ref是因为reactive在v-model使用双向绑定的时候有可能会有些问题
    const FormField = ref(originField)

    return {
      FormField
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
