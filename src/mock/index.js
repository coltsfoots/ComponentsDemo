import Mock from 'mockjs'
import loginAPI from './login'
import listAPI from './list'
import singleDetailAPI from './singleDetail'

Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/user\/info/, 'get', loginAPI.getUserInfo)
Mock.mock(/\/transport\/list/, 'post', listAPI.getOrderList)
Mock.mock(/\/transport\/singleDetail/, 'post', singleDetailAPI.getSingleDetails)

export default Mock
