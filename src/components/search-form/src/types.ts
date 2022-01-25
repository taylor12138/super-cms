interface IFormItem {
  field: string
  type: string
  label: string
  rules?: any[]
  placeholder?: any
  selectorOptions?: any[]
  timeOptions?: any
  isHidden?: boolean
}
interface IForm {
  FormItems: IFormItem[]
  labelWidth?: string
  layout?: any
}
export { IFormItem, IForm }
