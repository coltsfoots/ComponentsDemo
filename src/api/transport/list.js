import request from '@/utils/request'

export function getOrderList(data) {
  return request({
    url: '/transport/list',
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    data
  })
}

export function addOrderList() {
  return request({
    url: '/transport/orderAdd',
    method: 'post'
  })
}
