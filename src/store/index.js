import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";


export default createStore({
    // plugins: [createPersistedState()],
    state: {
        isLoading: '',
    },
    getters: {

        getLoading(state) {
            return state.isLoading;
        }
    },
    mutations: {

        setLoading(state, payload) {
            state.isLoading = payload;
        },
    },
    actions: {},
    modules: {},
});