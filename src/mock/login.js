import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '管理员',
    name: 'Admin'
  },
  company: {
    roles: ['company'],
    token: 'company',
    introduction: '普通会员',
    name: 'Company'
  },
  combo: {
    roles: ['combo'],
    token: 'combo',
    introduction: '联合体',
    name: 'Combo'
  },
  agt: {
    roles: ['agt'],
    token: 'agt',
    introduction: '物流科技',
    name: 'Agt'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  }
}
