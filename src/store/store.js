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
    /************************************
     * !!! Set up getters to have reusable code for accessing our state,
     *     For multiple components and more complex calculations to shorten time
      */
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        }
    },
    /********************************
     * !!! Mutations will be committed, then changes the state,
     *     and to prevent multiple components manipulating our state
     *     Mutations must be synchronous, it fails to setTimeout();
     *
     *
     * !!! Extra piece is an action / extra function. It will commit the mutation,
     *     once the asynchronous calculation or getter function is finished,
     *     then all changes to our state still happen synchronously
     *     to make sure execute some async code before making this change.
     */
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        }
    },
    actions: {
        /**************************
         * !!! Context object has the commit method in this context object to commit a change,
         *     will access to out getters, and with all methods and properties by passing actions
         * @param context
         */
        // increment: context => {
        //     context.commit('increment');
        // },

        /************************************************************
         * !!! If we only need to get one property of an object,
         *     then we can use the ES6 feature of destructuring, by passing this as an argument,
         *     it will only pull out the commit method in this context object to commit a change,
         *
         */
        increment: ({ commit }, payload) => {
            // commit a mutation and passing second argument
            commit('increment', payload);
        },
        decrement: ({ commit }, payload) => {
            commit('decrement', payload);
        },
        asyncIncrement: ({ commit }, payload) => {
           setTimeout(() => {
               commit('increment', payload.by);
            }, payload.duration);
        },
        asyncDecrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by);
            }, payload.duration);
        },
    }
});