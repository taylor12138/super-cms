import { IForm } from '@/components/search-form'
export const FormData: IForm = {
  FormItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'name2',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'name3',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'enable',
      type: 'select',
      label: '用户状态',
      placeholder: '请选择选项',
      selectorOptions: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      field: 'date',
      type: 'date-picker',
      label: '用户名',
      timeOptions: {
        'start-placeholder': 'Start date',
        'end-placeholder': 'End date'
      }
    }
  ]
}
