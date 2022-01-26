import { ref } from 'vue'

import DialogModule from '@/components/dialog-module'

type CallbackFn = (item?: any) => void

export default function useDialog(newCb?: CallbackFn, editCb?: CallbackFn) {
  //新建 | 修改功能
  const dialogModuleRef = ref<InstanceType<typeof DialogModule>>()
  const editData = ref({})
  const newBtnClick = () => {
    if (dialogModuleRef.value) {
      dialogModuleRef.value.dialogVisible = true
      editData.value = {}
    }
    newCb && newCb()
  }
  const editBtnClick = (item: any) => {
    if (dialogModuleRef.value) {
      dialogModuleRef.value.dialogVisible = true
      editData.value = item
    }
    editCb && editCb(item)
  }
  return {
    dialogModuleRef,
    newBtnClick,
    editBtnClick,
    editData
  }
}
