import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    plugins: [createPersistedState({ storage: window.sessionStorage })],
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false
        },

        mutations: {
        setToken (state, token) {
        state.token = token
        if (token && state.token == 200) {
        state.isUserLoggedIn = true
        } else {
        state.isUserLoggedIn = false
        }
        }
        },

        actions: {
        setToken ({ commit }, token) {
        commit('setToken', token)
        }
    }
});
export default store;