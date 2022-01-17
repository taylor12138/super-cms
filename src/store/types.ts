import { ILoginState } from './login/types'
export interface IRootState {
  name: string
  age: number
}

export interface IStoreType extends IRootState {
  login: ILoginState
}
