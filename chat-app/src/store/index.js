import Vue from "vue";
import Vuex from "vuex";
import authentication from "./modules/authentication";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toast: null,
  },
  getters: {
    getToast: state => state.toast,
  },
  mutations: {
    SET_TOAST(state, toast) {
      state.toast = toast;
    },
  },
  actions: {
    setToast({ commit }, toast) {
      commit("SET_TOAST", toast);
      setTimeout(() => {
        commit("SET_TOAST", null);
      }, 10000);
    },
  },
  modules: {
    authentication,
  },
});
