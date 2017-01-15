const types = {
  START_LOGIN: 'START_LOGIN',
  LOGIN: 'LOGIN',
  LOGIN_ERROR: 'LOGIN_ERROR',
  START_LOGOUT: 'START_LOGOUT',
  LOGOUT: 'LOGOUT',
  LOGOUT_ERROR: 'LOGOUT_ERROR',
  VALIDATE: 'VALIDATE',
  VALIDATE_ERROR: 'VALIDATE_ERROR',
};

const defaultState = {
  token: null,
  pending: false,
  errored: false,
  endpoint: 'https://otan.aius.u-strasbg.fr',
};

const getters = {
  logged: state => state.token !== null,
  pending: state => state.pending,
  errored: state => state.errored,
  token: state => state.token,
};

const actions = {
  login: async ({ commit, state }, { username, password }) => {
    commit(types.START_LOGIN);
    try {
      const res = await fetch(`${state.endpoint}/token`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({ username, password }),
      });

      const body = await res.json();

      if (res.status !== 200) {
        commit(types.LOGIN_ERROR, body.message);
        return;
      }

      commit(types.LOGIN, body.token);
    } catch (e) {
      // @TODO: Fine grained error handling
      commit(types.LOGIN_ERROR, 'Unknown error while trying to log in');
    }
  },
  logout: async ({ commit, state }, { token }) => {
    commit(types.START_LOGOUT);
    try {
      const res = await fetch(`${state.endpoint}/token/${token}`, {
        method: 'DELETE',
      });

      if (res.status !== 200) {
        commit(types.LOGOUT_ERROR, `Error ${res.status}`);
        return;
      }

      commit(types.LOGOUT, 'Logged out with success');
    } catch (e) {
      commit(types.LOGOUT_ERROR, 'Unknown error while trying to log out');
    }
  },
  validate() {

  },
};

const mutations = {
  [types.START_LOGIN](state) {
    state.pending = true;
    state.errored = false;
  },
  [types.LOGIN](state, token) {
    state.token = token;
    state.pending = false;
    state.errored = false;
  },
  [types.LOGIN_ERROR](state) {
    // @TODO: Do something with the message
    state.pending = false;
    state.errored = true;
  },
  [types.START_LOGOUT](state) {
    state.pending = true;
    state.errored = false;
  },
  [types.LOGOUT](state) {
    state.token = null;
    state.pending = false;
    state.errored = false;
  },
  [types.LOGOUT_ERROR](state) {
    state.pending = false;
    state.errored = true;
  },
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations,
};
