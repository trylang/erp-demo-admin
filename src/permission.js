import router from './router';
import store from './store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/auth';

NProgress.configure({ showSpinner: false });

const whiteList = ['/login', '/authredirect'];

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (getToken()) {
    // has token
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      if (store.getters.roles.length === 0) { // 还没有获取用户信息，需要拉取
        store.dispatch('GetUserInfo').then(() => {
          let roles = store.getters.roles;
          store.dispatch('GenerateRoutes',roles).then((res1) => {
            router.addRoutes(res1);
            store.commit('MENU_ACTIVE', to.path);
            next({ ...to, replace: true });
          })
        }).catch(() => {
          next({path: '/login'});
        })
      } else { // 已获取用户信息
        console.log(to.path);
        store.commit('MENU_ACTIVE', to.path);
        next();
        
      }
    }

  } else {
    // has no token
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单里，可以直接进入
      next();
    } else {
      next('/login');
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});