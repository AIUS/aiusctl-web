import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import auth from './modules/auth';
import sales from './modules/sales';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    auth,
    sales,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

if (module.hot) {
  module.hot.accept([
    './modules/auth',
  ], () => {
    /* eslint global-require: 0 */
    store.hotUpdate({
      modules: {
        auth: require('./modules/auth').default,
      },
    });
  });
}

export default store;
