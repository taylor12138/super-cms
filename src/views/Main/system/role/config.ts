import { IForm } from '@/components/search-form'
import { ITable } from '@/components/cms-table'
// 搜索栏配置
export const FormData: IForm = {
  FormItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'date',
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
    { prop: 'name', label: '角色名', minWidth: '100', slotName: 'name' },
    {
      prop: 'intro',
      label: '权限介绍',
      minWidth: '100',
      slotName: 'intro'
    },
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
  title: '权限表格'
}
