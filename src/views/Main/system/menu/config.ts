import { ITable } from '@/components/cms-table'
export const TableData: ITable = {
  // 标题
  title: '菜单列表',
  // table的每列参数
  propList: [
    { prop: 'name', label: '菜单', minWidth: '100', slotName: 'name' },
    {
      prop: 'type',
      label: '类型',
      minWidth: '100',
      slotName: 'type'
    },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: '100',
      slotName: 'url'
    },
    {
      prop: 'permission',
      label: '按钮权限',
      minWidth: '100',
      slotName: 'permission'
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
  showSelectColomn: false
}
