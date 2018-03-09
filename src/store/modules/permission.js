import { asyncRouterMap, constantRouterMap } from '@/router';

const state = {
  routers: constantRouterMap,
  addRouters: []
};

const getters = {
  permission_routers: state => state.routers,
  addRouters: state => state.addRouters
};

const mutations = {
  SET_ROUTERS: (state, routers) => {
    state.addRouters = routers;
    state.routers = routers;
    // state.routers = constantRouterMap.concat(routers);
  }
}

const actions = {
  GenerateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRouters;
      if(roles.indexOf('admin') >= 0) {
        accessedRouters = constantRouterMap;
      } else {
        accessedRouters = constantRouterMap;
      }
      commit('SET_ROUTERS', accessedRouters);
      resolve(accessedRouters);
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}