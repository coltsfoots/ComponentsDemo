const getters = {
  sidebar: state => state.app.sidebar,
  currentPage: state => state.app.currentPage,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  areas: state => state.areas.areas,
  chart: state => state.chart.date
}
export default getters
