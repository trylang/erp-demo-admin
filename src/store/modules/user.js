import { loginByUsername, getUserInfo } from '@/utils/rest/user';
import { getToken, setToken } from '@/utils/auth';
import { _returnPromise } from '../../utils';

const state = {
  user: '',
  status: '',
  code: '',
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  setting: {
    articlePlatform: []
  }
};

const getters = {
  token: state => state.token,
  avatar: state => state.avatar,
  name: state => state.name,
  introduction: state => state.introduction,
  status: state => state.status,
  roles: state => state.roles,
  setting: state => state.setting
};

const mutations = {
  SET_CODE: (state, code) => {
    state.code = code;
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_SETTING: (state, setting) => {
    state.setting = setting
  },
  SET_STATUS: (state, status) => {
    state.status = status
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
};

const actions = {
  LoginByUsername({ commit }, userInfo) {
    _returnPromise(loginByUsername, { param: userInfo }, (data) => {
      commit('SET_TOKEN', data.token);
      setToken(data.token)
    })
  },

  GetUserInfo({ commit, state }) {
    return _returnPromise(getUserInfo, { token: state.token }, (data) => {
      commit('SET_ROLES', data.roles)
      commit('SET_NAME', data.name)
      commit('SET_AVATAR', data.avatar)
      commit('SET_INTRODUCTION', data.introduction)
    })
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}
