export const rules = {
  account: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      min: 5,
      max: 11,
      message: '密码长度应不少于5位且不多于11位',
      trigger: 'blur'
    }
  ]
}
