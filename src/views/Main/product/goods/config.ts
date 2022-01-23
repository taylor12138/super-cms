import { ITable } from '@/components/cms-table'
export const TableData: ITable = {
  // 标题
  title: '商品列表',
  // table的每列参数
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100', slotName: 'name' },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: '100',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价',
      minWidth: '100',
      slotName: 'newPrice'
    },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'imgUrl' },
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
  showSelectColomn: true
}
