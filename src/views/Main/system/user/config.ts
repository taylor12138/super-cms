import { IForm } from '@/components/search-form'
import { ITable } from '@/components/cms-table'
// 搜索栏配置
export const FormData: IForm = {
  FormItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
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
      field: 'createAt',
      type: 'date-picker',
      label: '日期',
      timeOptions: {
        'start-placeholder': 'Start date',
        'end-placeholder': 'End date'
      }
    }
  ]
}
export const TableData: ITable = {
  // table的每列参数
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
    {
      prop: 'realname',
      label: '姓名',
      minWidth: '100',
      slotName: 'realname'
    },
    {
      prop: 'cellphone',
      label: '手机号码',
      minWidth: '100',
      slotName: 'cellphone'
    },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'enable' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '150',
      slotName: 'operation'
    }
  ],
  // 是否展示选中列
  showSelectColomn: true,
  // 标题
  title: '用户表格'
}
