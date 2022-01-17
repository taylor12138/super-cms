import myRequest from '../index'
import { IUser, IDataType, ILoginType } from './type'

enum loginAPI {
  accountAPI = '/login',
  getUserInfo = '/users/', //  /users/id
  getUserMenus = '/role/' //  /role/id/menu
}

export function accountRequest(user: IUser) {
  return myRequest.post<IDataType<ILoginType>>({
    url: loginAPI.accountAPI,
    data: {
      name: user.account,
      password: user.password
    }
  })
}
export function getUserRequest(id: number) {
  return myRequest.get<IDataType>({
    url: loginAPI.getUserInfo + id
  })
}
export function getMenuRequest(id: number) {
  return myRequest.get<IDataType>({
    url: loginAPI.getUserMenus + id + '/menu'
  })
}
