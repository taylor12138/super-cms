import CompleteTable from '@/components/complete-table'
import { ref } from 'vue'
export default function useSearch() {
  // 表单本单
  const tableRef = ref<InstanceType<typeof CompleteTable>>()
  //搜索组件的函数
  const ResetCallback = () => {
    tableRef.value?.getData()
  }
  const searchCallback = (queryInfo: any) => {
    console.log(queryInfo)
    tableRef.value?.getData(queryInfo)
  }
  return {
    tableRef,
    ResetCallback,
    searchCallback
  }
}
