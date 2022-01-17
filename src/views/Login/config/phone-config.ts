export const rules = {
  number: [
    {
      required: true,
      message: '请输入手机',
      trigger: 'blur'
    },
    {
      pattern: /[0-9]{11}/,
      message: '请输入11位数字类型',
      trigger: 'blur'
    }
  ],
  identify: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ]
}
