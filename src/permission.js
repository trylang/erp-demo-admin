import router from './router';
import store from './store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/auth';

NProgress.configure({ showSpinner: false });

const whiteList = ['/login', '/authredirect'];

router.beforeEach((to, from, next) => {
  console.log(getToken());
  NProgress.start();
  if (getToken()) {
    // has token
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      let store = router.app.$options.store,
        _path = to.path.match(/\/?[^\/]+/g);
      _path = _path || ['/'];
      let enterHandler = () => {
        store.commit('MENU_ACTIVE', _path[0])
      };
      enterHandler();
      next();
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

router.afterEach( () => {
  NProgress.done();
});