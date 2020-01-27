import Vue from 'vue';
import Vuex from 'vuex';
import counter from './counter';

// let javascript create an object here which I can access with the name actions,
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './modules/mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
});