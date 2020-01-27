import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // the counter is now in our central store
    state: {
        counter: 0
    }
});