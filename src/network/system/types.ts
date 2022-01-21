export interface IListType {
  list: any[]
  totalCount: number
}

export interface IDataType<T = any> {
  code: number
  data: T
}
