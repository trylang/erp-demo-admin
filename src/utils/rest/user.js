import request from '@/utils/request';

export function loginByUsername(url) {
  return request({
    url: '/login/login',
    method: 'post',
    data: url.param
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: token 
  })
}