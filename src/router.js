import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from './components/Hello';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

Vue.use(VueRouter);

const routes = [{
  name: 'home',
  path: '/',
  component: Hello,
}, {
  name: 'login',
  path: '/login',
  component: Login,
}, {
  name: 'dashboard',
  path: '/dashboard',
  meta: { requiresAuth: true },
  component: Dashboard,
}];

const router = new VueRouter({
  routes,
});

export default router;

export const restrict = (store) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth) &&
        !store.getters['auth/logged']) {
      // Redirect to login if route requires auth
      next({
        name: 'login',
        query: { redirect: to.fullPath },
      });
    } else if (to.name === 'login' && store.getters['auth/logged']) {
      // Redirect to dashboard if already logged in
      next({ name: 'dashboard' });
    } else {
      next();
    }
  });
};
