// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import '@/styles/index.scss' // global css

import App from './App'
import store from '@/store'
import router from './router'

import './icons' // icon
import './permission' // permission
import './mock' // mock
import '@/utils/log'

Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
