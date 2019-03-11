import axios from 'axios'
import { Message, Loading } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 10000 // 请求超时
})

let loading = null
function startLoading() {
  loading = Loading.service({
    target: document.getElementById('#app-container'),
    lock: true,
    text: 'loading...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.5)'
  })
}
function endLoading() {
  loading.close()
}
// 请求拦截
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带token
  // }
  // config.headers['Content-type'] = 'application/x-www-form-urlencoded'
  // config['content-type'] = 'application/x-www-form-urlencoded'
  startLoading()
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    // const res = response.data
    // if (res.error_code !== 200) {
    //   Message({
    //     message: '请求错误',
    //     type: 'error',
    //     duration: 5000
    //   })
    // } else {
    //   return res
    // }

    setTimeout(() => {
      endLoading()
    }, 1000)

    return response
  },

  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
  //  const res = response.data;
  //     if (res.code !== 20000) {
  //       Message({
  //         message: res.message,
  //         type: 'error',
  //         duration: 5 * 1000
  //       });
  //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }).then(() => {
  //           store.dispatch('FedLogOut').then(() => {
  //             location.reload();// 为了重新实例化vue-router对象 避免bug
  //           });
  //         })
  //       }
  //       return Promise.reject('error');
  //     } else {
  //       return response.data;
  //     }
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  })

export default service
