// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';

import App from './App';
import store from './store';
import router, { restrict } from './router';

// Needed to inject beforeEach hooks
restrict(store);

Vue.use(VueMaterial);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  router,
  components: { App },
});
