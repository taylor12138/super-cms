export interface IUser {
  account: string
  password: string
}
export interface ILoginType {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}
