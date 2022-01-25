import { ILoginState } from './login/types'
import { ISystemState } from './system/types'
export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
}

export interface IStoreType extends IRootState {
  login: ILoginState
  system: ISystemState
}
