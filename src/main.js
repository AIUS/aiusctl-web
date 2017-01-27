// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';

import App from './components/App';
import store from './store';
import router, { restrict } from './router';

// Needed to inject beforeEach hooks
restrict(store);

Vue.use(VueMaterial);

Vue.material.registerTheme({
  default: {
    primary: 'indigo',
    accent: 'pink',
    warn: 'deep-orange',
  },
  home: {
    primary: 'red',
    accent: 'blue',
    warn: 'deep-orange',
  },
  white: {
    primary: 'white',
    accent: 'blue',
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  router,
  components: { App },
});
