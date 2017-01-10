const types = {
  OPEN_SIDEBAR: 'OPEN_SIDEBAR',
  CLOSE_SIDEBAR: 'CLOSE_SIDEBAR',
};

const defaultState = {
  sidebarOpen: false,
};

const getters = {
  sidebar: state => state.sidebarOpen,
};

const actions = {
  openSidebar({ commit }) {
    commit(types.OPEN_SIDEBAR);
  },
  closeSidebar({ commit }) {
    commit(types.CLOSE_SIDEBAR);
  },
};

const mutations = {
  [types.OPEN_SIDEBAR](state) {
    state.sidebarOpen = true;
  },
  [types.CLOSE_SIDEBAR](state) {
    state.sidebarOpen = false;
  },
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations,
};
