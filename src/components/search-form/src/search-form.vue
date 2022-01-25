<template>
  <div class="search-form">
    <slot name="header"></slot>
    <el-form :label-width="labelWidth">
      <el-row justify="space-around">
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="layout" class="col">
            <el-form-item
              :label="item.label"
              :style="itemStyle"
              :rules="item.rules"
              v-if="!item.isHidden"
            >
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  :model-value="modelValue[item.field]"
                  @update:modelValue="inputHandle($event, item.field)"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  :model-value="modelValue[item.field]"
                  @update:modelValue="inputHandle($event, item.field)"
                >
                  <el-option
                    v-for="option in item.selectorOptions"
                    :key="option.value"
                    :label="option.title"
                    :value="option.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'date-picker'">
                <el-date-picker
                  type="daterange"
                  range-separator="To"
                  style="width: 100%"
                  v-bind="item.timeOptions"
                  :model-value="modelValue[item.field]"
                  @update:modelValue="inputHandle($event, item.field)"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { IFormItem } from './types'

export default defineComponent({
  props: {
    // 传入的数据
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    // 描述符宽度
    labelWidth: {
      type: String,
      default: '100px'
    },
    // 布局
    layout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    modelValue: {
      type: Object,
      default: () => ({})
    },
    itemStyle: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const FormField = ref({ ...props.modelValue })
    // watch(
    //   FormField,
    //   (newValue) => {
    //     emit('update:modelValue', newValue)
    //   },
    //   {
    //     deep: true
    //   }
    // )
    const inputHandle = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return {
      FormField,
      inputHandle
    }
  }
})
</script>

<style scoped lang="less">
.col {
  display: flex;
  justify-content: center;
  .el-form-item {
    margin: 18px;
  }
}
</style>
