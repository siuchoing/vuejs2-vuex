import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/*******************
 * doubleCounter is function
 * state is passed automatically by vuex as argument
 */
export const store = new Vuex.Store({
    // the counter is now in our central store
    state: {
        counter: 0
    },
    // For multiple components and more complex calculations to shorten time
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        }
    }
});