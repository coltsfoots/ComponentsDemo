import { getAreas } from '@/api/getAreas'
import { setSessionStorage } from '@/utils/auth'

const areas = {
  state: {
    areas: []
  },
  mutations: {
    SET_PROVINCES: (state, provinces) => {
      state.provinces = provinces
    },
    SET_CITIES: (state, cities) => {
      state.cities = cities
    },
    SET_AREAS: (state, areas) => {
      state.areas = areas
    },
    SET_STREETS: (state, streets) => {
      state.streets = streets
    }
  },
  actions: {
    GetAreas({ commit }, payload) {
      const code = payload.code
      return new Promise((resolve, reject) => {
        getAreas(code).then(res => {
          const data = res.data.result
          commit('SET_AREAS', data)
          setSessionStorage(data)
          resolve(data)
        }).catch(error => {
          console.log(error)
        })
      })
    }
  }
}

export default areas
