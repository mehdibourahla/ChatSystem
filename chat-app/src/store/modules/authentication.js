const state = {
    user: null
};

const getters = {
    isAuthenticated: state => !!state.user,
    StateUser: state => state.user
};

const actions = {
    async register(newUser) {
        const res = await fetch("api/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        });
        if (res.status === 201) {
            let UserForm = new FormData();
            UserForm.append("email", newUser.email);
            UserForm.append("password", newUser.password);
            await dispatch("login", UserForm);
        } else {
            console.error(res.statusText);
        }
    },

    async login(user) {
        const res = await fetch("api/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        });
        if (res.status === 201) {
            await commit("setUser", user.email);
        } else {
            console.error(res.statusText);
        }
    },

    async logout({ commit }) {
        const res = await fetch("api/logout", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ id: localStorage.getItem("user-id") })
        });
        if (res.ok) {
            commit("logout");
        }
    }
};

const mutations = {
    setUser(state, email) {
        state.user = email;
    },
    logout(state) {
        state.user = null;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
