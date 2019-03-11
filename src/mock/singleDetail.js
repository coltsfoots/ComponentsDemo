import Mock from 'mockjs'

export default {
  getSingleDetails: config => {
    return Mock.mock({
      error_code: 200,
      msg: 'ok',
      total: 100,
      'result|20': [{
        sendDate: '@date',
        orderId: /\d{16}/,
        goodsCode: /\d{10}/,
        'payType|1-4': 1,
        // receiveCompany: '@cword(10, 20)',
        // receiveName: '@cname(2, 4)',
        // goodsName: '@cword(1, 6)',
        // 'goodsCount|1-100': 1,
        'goodsWeight|1-100.2': 1
        // 'goodsVolume|1-100.2': 1,
        // 'payType|1': ['到付', '现付', '回单付', '月结'],
        // 'freight|1-100.2': 1,
        // 'returnAmount|1-100.2': 1,
        // 'breakAmount|1-100.2': 1,
        // 'orderStatus|100-360': 1,
        // 'payStatus|0-1': 0
      }]
    })
  }
}
