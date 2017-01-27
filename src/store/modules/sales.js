const types = {
  START_PRODUCTS: 'START_PRODUCTS',
  PRODUCTS: 'PRODUCTS',
  PRODUCTS_ERROR: 'PRODUCTS_ERROR',
  START_CATEGORIES: 'START_CATEGORIES',
  CATEGORIES: 'CATEGORIES',
  CATEGORIES_ERROR: 'CATEGORIES_ERROR',
};

const defaultState = {
  products: [],
  categories: [],
  pending: false,
  errored: false,
  endpoint: 'https://salesd.aius.u-strasbg.fr',
};

const getters = {
  fetched: state => state.products !== null && state.categories !== null,
  pending: state => state.pending,
  errored: state => state.errored,
  categories: state => ([
    ...state.categories.map(c => ({
      ...c,
      products: state.products.filter(p => p.category === c.id),
    })),
    {
      name: 'Autre',
      products: state.products.filter(p => !p.category),
    },
  ]),
};

const actions = {
  getProducts: async ({ commit, state }) => {
    commit(types.START_PRODUCTS);
    try {
      const res = await fetch(`${state.endpoint}/products`, {
        method: 'GET',
      });

      const body = await res.json();

      if (res.status !== 200) {
        commit(types.PRODUCTS_ERROR, body.message);
        return;
      }

      commit(types.PRODUCTS, body);
    } catch (e) {
      commit(types.PRODUCTS_ERROR, 'Unknown error while trying to get products');
    }
  },
  getCategories: async ({ commit, state }) => {
    commit(types.START_CATEGORIES);
    try {
      const res = await fetch(`${state.endpoint}/categories`, {
        method: 'GET',
      });

      const body = await res.json();

      if (res.status !== 200) {
        commit(types.CATEGORIES_ERROR, body.message);
        return;
      }

      commit(types.CATEGORIES, body);
    } catch (e) {
      commit(types.CATEGORIES_ERROR, 'Unknown error while trying to get categories');
    }
  },
};

const mutations = {
  [types.START_PRODUCTS](state) {
    state.pending = true;
    state.errored = false;
  },
  [types.PRODUCTS](state, products) {
    state.products = products;
    state.pending = false;
    state.errored = false;
  },
  [types.PRODUCTS_ERROR](state) {
    // @TODO: Do something with the message
    state.pending = false;
    state.errored = true;
  },
  [types.START_CATEGORIES](state) {
    state.pending = true;
    state.errored = false;
  },
  [types.CATEGORIES](state, categories) {
    state.categories = categories;
    state.pending = false;
    state.errored = false;
  },
  [types.CATEGORIES_ERROR](state) {
    // @TODO: Do something with the message
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
