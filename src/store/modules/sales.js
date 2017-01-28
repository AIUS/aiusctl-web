const types = {
  START_PRODUCTS: 'START_PRODUCTS',
  PRODUCTS: 'PRODUCTS',
  PRODUCTS_ERROR: 'PRODUCTS_ERROR',
  START_CATEGORIES: 'START_CATEGORIES',
  CATEGORIES: 'CATEGORIES',
  CATEGORIES_ERROR: 'CATEGORIES_ERROR',
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  CART_SUBMIT: 'CART_SUBMIT',
  START_CART_SUBMIT: 'START_CART_SUBMIT',
  CART_SUBMIT_ERROR: 'CART_SUBMIT_ERROR',
  EMPTY_CART: 'EMPTY_CART',
};

const defaultState = {
  products: [],
  categories: [],
  cart: [],
  pending: false,
  errored: false,
  endpoint: 'https://salesd.aius.u-strasbg.fr',
};

const getters = {
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
  cart: state => state.cart.map((item) => {
    const product = state.products.find(p => p.id === item.id);
    return ({
      ...item,
      price: product.price * item.quantity,
      product,
    });
  }),
  total: (state, gtrs) => gtrs.cart.reduce((t, i) => t + i.price, 0),
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
  addProduct: async ({ commit }, id) => {
    commit(types.ADD_PRODUCT, id);
  },
  removeProduct: async ({ commit }, id) => {
    commit(types.REMOVE_PRODUCT, id);
  },
  submitCart: async ({ commit, state, rootState }) => {
    if (state.cart.length > 0) {
      commit(types.START_CART_SUBMIT);
      try {
        const res = await fetch(`${state.endpoint}/sale`, {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({
            data: state.cart,
            token: rootState.auth.token,
          }),
        });

        const body = await res.json();

        if (res.status !== 200) {
          commit(types.CART_SUBMIT_ERROR, body.message);
          return;
        }

        commit(types.CART_SUBMIT, body);
      } catch (e) {
        commit(types.CART_SUBMIT_ERROR, 'Unknown error while trying to submit cart');
      }
    }
  },
  emptyCart: async ({ commit }) => {
    commit(types.EMPTY_CART);
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
    state.pending = false;
    state.errored = true;
  },
  [types.ADD_PRODUCT](state, id) {
    const p = state.cart.find(c => c.id === id);
    if (p) {
      p.quantity += 1;
    } else {
      state.cart.push({
        id,
        quantity: 1,
      });
    }
  },
  [types.REMOVE_PRODUCT](state, id) {
    state.cart = state.cart.filter(c => c.id !== id);
  },
  [types.START_CART_SUBMIT](state) {
    state.pending = true;
    state.errored = false;
  },
  [types.CART_SUBMIT](state) {
    state.pending = false;
    state.errored = false;
    state.cart = [];
  },
  [types.CART_SUBMIT_ERROR](state) {
    state.pending = false;
    state.errored = true;
  },
  [types.EMPTY_CART](state) {
    state.cart = [];
  },
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations,
};
