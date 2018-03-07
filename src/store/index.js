import Vue from 'vue';
import Vuex from 'vuex';
import finance from './modules/finance';
import user from './modules/user';
import common from './modules/common';
import permission from './modules/permission';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        common,
        finance,
        user,
        permission
    }
});
