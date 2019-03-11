import { companyAdminRouterMap } from '@/router'

const permission = {
  state: {
    routers: companyAdminRouterMap
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.routers = companyAdminRouterMap
    }
  },
  actions: {
    GenerateRoutes({ commit }) {
      return new Promise(resolve => {
        commit('SET_ROUTERS', companyAdminRouterMap)
        resolve()
      })
    }
  }
}

export default permission
