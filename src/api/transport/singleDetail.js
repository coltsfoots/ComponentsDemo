import request from '@/utils/request'

export function getSingleDetails(data) {
  return request({
    url: '/transport/singleDetail',
    method: 'post',
    data
  })
}
