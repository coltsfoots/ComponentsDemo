import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

/**
 * 侧边栏是根据路由生成，有一些页面不存在于侧边栏，根据情况设置以下参数
 * hidden: true                         表示永远不会出现在侧边栏 (默认值: false)
 * alwaysShow: true                     表示永远显示在侧边栏，不管这个路由有多少子路由，比如首页之类的  (默认值: false)
 * name: 'router-name'                  路由名字
 * meta: {
 *   roles: ['admin', 'company']        路由权限规则
 *   title: 'title'                     展示在侧边栏、面包屑地方的名字，必须设置
 *   icon: 'svg-name'                   侧边栏导航的图标
 *   noCache: true                      是否缓存组件，默认false
 * }
 */
const _import = page => {
  return () => import('@/views/' + page)
}

export const companyAdminRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: _import('admin/index'),
        meta: {
          title: '首页',
          icon: 'dashboard'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'form',
        name: 'form',
        component: _import('form/index'),
        meta: {
          title: '表单',
          icon: 'form'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'table',
        name: 'table',
        component: _import('table/index'),
        meta: {
          title: '表格',
          icon: 'table'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'pagination',
        name: 'pagination',
        component: _import('pagination/index'),
        meta: {
          title: '分页',
          icon: 'icon'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'form-table-pagination',
        name: 'formtablepagination',
        component: _import('formtablepagination/index'),
        meta: {
          title: '表单表格',
          icon: 'form'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'datetimepicker',
        name: 'datetimepicker',
        component: _import('datetimepicker/index'),
        meta: {
          title: '日期选择',
          icon: 'component'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'treetransfer',
        name: 'treetransfer',
        component: _import('treetransfer/index'),
        meta: {
          title: '树穿梭框',
          icon: 'form'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: 'index'
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: companyAdminRouterMap
})
