
import { getChartDate } from '@/utils'
const chartDate = {
  7: [],
  30: []
}
for (let i = -6; i < 1; i++) {
  chartDate[7].push(getChartDate(i))
}
const y = new Date().getFullYear()
const m = new Date().getMonth() + 1
const monthLen = new Date(y, m, 0).getDate()
for (let i = (-monthLen + 1); i < 1; i++) {
  chartDate[30].push(getChartDate(i))
}

const chart = {
  state: {
    date: chartDate[30]
  },
  mutations: {
    CHANGE_DATE: (state, date) => {
      switch (date) {
        case 7:
          state.date = chartDate[date]
          break
        case 180:
          break
        case 360:
          break
        default:
          state.date = chartDate[date]
          break
      }
    }
  },
  actions: {
    changeDate({ commit, state }, date) {
      return new Promise((resolve, reject) => {
        commit('CHANGE_DATE', date)
        resolve(state.date)
      })
    }
  }
}

export default chart
