import request from '@/utils/request'

export function getProvinces(code) {
  return request({
    url: '/getProvinces',
    method: 'get',
    params: { code }
  })
}

export function getCities(code) {
  return request({
    url: '/getCities',
    method: 'get',
    params: { code }
  })
}

export function getAreas(code) {
  return request({
    url: '/getAreas',
    method: 'get',
    params: { code }
  })
}

export function getStreets(code) {
  return request({
    url: '/getStreets',
    method: 'get',
    params: { code }
  })
}
