import { ILoginState } from './login/types'
import { ISystemState } from './system/types'
export interface IRootState {
  name: string
  age: number
}

export interface IStoreType extends IRootState {
  login: ILoginState
  system: ISystemState
}
