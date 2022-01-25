import { ref } from 'vue'

import DialogModule from '@/components/dialog-module'

type CallbackFn = () => void

export default function useDialog(newCb?: CallbackFn, editCb?: CallbackFn) {
  //新建 | 修改功能
  const dialogModuleRef = ref<InstanceType<typeof DialogModule>>()
  const editData = ref({})
  const newBtnClick = () => {
    console.log('新建成功')
    if (dialogModuleRef.value) {
      dialogModuleRef.value.dialogVisible = true
      editData.value = {}
    }
    newCb && newCb()
  }
  const editBtnClick = (item: any) => {
    console.log('修改成功', item)
    if (dialogModuleRef.value) {
      dialogModuleRef.value.dialogVisible = true
      editData.value = item
    }
    editCb && editCb()
  }
  return {
    dialogModuleRef,
    newBtnClick,
    editBtnClick,
    editData
  }
}
