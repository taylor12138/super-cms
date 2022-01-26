import myRequest from '../index'
import { IDataType, IListType } from './types'

// enum SystemAPI {
//   listAPI = '/users/list',
// }

export function getPageListData(url: string, queryOtions: any) {
  return myRequest.post<IDataType<IListType>>({
    url,
    data: queryOtions
  })
}
// /users/id  删除资源
export function deletePageListData(url: string) {
  return myRequest.delete<IDataType>({
    url
  })
}
// /users/    新建资源
export function createPageListData(url: string, queryInfo: any) {
  return myRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
// /users/    修改资源
export function editPageListData(url: string, queryInfo: any) {
  return myRequest.patch<IDataType>({
    url,
    data: queryInfo
  })
}
