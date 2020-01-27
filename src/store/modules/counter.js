import * as types from '../types';

/*******************
 * [types.DOUBLE_COUNTER] is function
 * state is passed automatically by vuex as argument
 */
// the counter is now in our central store
const state = {
    counter: 0
};

/************************************
 * !!! Set up getters to have reusable code for accessing our state,
 *     For multiple components and more complex calculations to shorten time
 */
const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    }
};

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
 *
 * !!! Payload is basically data we pass to mutate the state.
 */
const mutations = {
    [types.MUTATE_INCREMENT_COUNTER]: (state, payload) => {
        state.counter += payload;
    },
    [types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
        state.counter -= payload;
    }
};

/************************************************************
 * !!! If we only need to get one property of an object,
 *     then we can use the ES6 feature of destructuring, by passing this as an argument,
 *     it will only pull out the commit method in this context object to commit a change,
 *
 */
const actions = {
    [types.COUNTER_INCREMENT]: ({ commit }, payload) => {
        // commit a mutation and passing second argument
        commit(types.MUTATE_INCREMENT_COUNTER, payload);
    },
    [types.COUNTER_DECREMENT]: ({ commit }, payload) => {
        commit(types.MUTATE_DECREMENT_COUNTER, payload);
    },
    [types.COUNTER_INCREMENT_ASYNC]: ({commit}, payload) => {
        setTimeout(() => {
            commit(types.MUTATE_INCREMENT_COUNTER, payload.by);
        }, payload.duration);
    },
    [types.COUNTER_DECREMENT_ASYNC]: ({commit}, payload) => {
        setTimeout(() => {
            commit(types.MUTATE_DECREMENT_COUNTER, payload.by);
        }, payload.duration);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};