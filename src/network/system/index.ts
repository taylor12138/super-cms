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
export function deletePAgeListData(url: string) {
  return myRequest.delete<IDataType>({
    url
  })
}
