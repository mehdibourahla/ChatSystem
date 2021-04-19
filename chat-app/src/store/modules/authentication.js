import axios from "axios";
import router from "../../router";
const state = {
  user: {},
  token: localStorage.getItem("token") || "",
  status: "",
};

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
};

const actions = {
  register({ commit }, newUser) {
    commit("auth_request");
    axios({
      url: "api/register",
      data: newUser,
      method: "POST",
    })
      .then(() => {
        this.dispatch("login", newUser);
      })
      .catch(err => {
        commit("auth_error");
        console.error(err);
      });
  },

  login({ commit }, user) {
    commit("auth_request");
    axios({ url: "api/login", data: user, method: "POST" })
      .then(res => {
        let user = res.data.user;
        let token = res.data.token;
        commit("auth_success", { user, token });
        localStorage.setItem("token", token);
        router.push("/main");
      })
      .catch(err => {
        commit("auth_error");
        localStorage.removeItem("token");
        console.error(err);
      });
  },

  logout({ commit }) {
    axios({
      url: "api/logout",
      data: { id: state.user.id },
      method: "POST",
    })
      .then(() => {
        localStorage.removeItem("token");
        commit("logout");
        router.push("/");
      })
      .catch(err => {
        console.error(err);
      });
  },
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, { user, token }) {
    state.status = "success";
    state.token = token;
    state.user = user;
  },
  auth_error(state) {
    state.status = "error";
  },
  logout(state) {
    (state.status = ""), (state.token = ""), (state.user = {});
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
