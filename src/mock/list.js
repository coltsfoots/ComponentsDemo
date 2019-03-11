import Mock from 'mockjs'

export default {
  getOrderList: config => {
    const { pageSize } = JSON.parse(config.body)
    if (pageSize === 20) {
      return Mock.mock({
        error_code: 200,
        msg: 'ok',
        total: 115,
        'result|20': [{
          sendDate: '@date',
          orderId: /\d{16}/,
          goodsCode: /\d{10}/,
          sendProvince: '@province',
          sendCity: '@city',
          sendArea: '白云区',
          sendStreet: '@county',
          receiveProvince: '@province',
          receiveCity: '@city',
          receiveArea: '东城区',
          receiveStreet: '@county',
          sendUserName: '@cname',
          receiveUserName: '@cname',
          goodsName: '@cword',
          'goodsCount|1-100.2': 1,
          'goodsWeight|1-100.2': 1,
          'goodsVolume|1-100.2': 1
        }]
      })
    } else if (pageSize === 50) {
      return Mock.mock({
        error_code: 200,
        msg: 'ok',
        total: 115,
        'result|50': [{
          sendDate: '@date',
          orderId: /\d{16}/,
          goodsCode: /\d{10}/,
          sendProvince: '@province',
          sendCity: '@city',
          sendArea: '白云区',
          sendStreet: '@county',
          receiveProvince: '@province',
          receiveCity: '@city',
          receiveArea: '东城区',
          receiveStreet: '@county',
          sendUserName: '@cname',
          receiveUserName: '@cname',
          goodsName: '@cword',
          'goodsCount|1-100.2': 1,
          'goodsWeight|1-100.2': 1,
          'goodsVolume|1-100.2': 1
        }]
      })
    } else if (pageSize === 100) {
      return Mock.mock({
        error_code: 200,
        msg: 'ok',
        total: 115,
        'result|100': [{
          sendDate: '@date',
          orderId: /\d{16}/,
          goodsCode: /\d{10}/,
          sendProvince: '@province',
          sendCity: '@city',
          sendArea: '白云区',
          sendStreet: '@county',
          receiveProvince: '@province',
          receiveCity: '@city',
          receiveArea: '东城区',
          receiveStreet: '@county',
          sendUserName: '@cname',
          receiveUserName: '@cname',
          goodsName: '@cword',
          'goodsCount|1-100.2': 1,
          'goodsWeight|1-100.2': 1,
          'goodsVolume|1-100.2': 1
        }]
      })
    } else {
      return Mock.mock({
        error_code: 200,
        msg: 'ok',
        total: 115,
        'result|150': [{
          sendDate: '@date',
          orderId: /\d{16}/,
          goodsCode: /\d{10}/,
          sendProvince: '@province',
          sendCity: '@city',
          sendArea: '白云区',
          sendStreet: '@county',
          receiveProvince: '@province',
          receiveCity: '@city',
          receiveArea: '东城区',
          receiveStreet: '@county',
          sendUserName: '@cname',
          receiveUserName: '@cname',
          goodsName: '@cword',
          'goodsCount|1-100.2': 1,
          'goodsWeight|1-100.2': 1,
          'goodsVolume|1-100.2': 1
        }]
      })
    }
  }
}
