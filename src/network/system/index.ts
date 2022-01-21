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
