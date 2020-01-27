/**************************
 * !!! Context object has the commit method in this context object to commit a change,
 *     will access to out getters, and with all methods and properties by passing actions
 * @param context
 */
// increment: context => {
//     context.commit('increment');
// },

export const updateValue = ({commit}, payload) => {
    commit('updateValue', payload);
};

// For More actions
// export const action2 = () => {};