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
  authUser: state => state.user,
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

  login({ commit }, userForm) {
    commit("auth_request");
    axios({ url: "api/login", data: userForm, method: "POST" })
      .then(res => {
        let user = res.data.user;
        let token = res.data.token;
        localStorage.setItem("token", token);
        commit("auth_success", { user, token });
        router.push("/main");
        // this.dispatch("getAuth");
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

  getAuth({ commit }) {
    axios({
      url: "api/authUser",
    })
      .then(res => {
        commit("SET_USER", res.data);
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
  SET_USER(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
