import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import PreCrocs from './components/pages/PreCrocs';
import PreRegister from './components/pages/PreRegister';
import Calendar from './components/pages/Calendar';
import Crocs from './components/pages/Crocs';
import Sales from './components/pages/Sales';
import Settings from './components/pages/Settings';
import Users from './components/pages/Users';

Vue.use(VueRouter);

const routes = [{
  name: 'home',
  path: '/',
  meta: { requiresAuth: true },
  component: Home,
}, {
  name: 'login',
  path: '/login',
  component: Login,
}, {
  name: 'preCrocs',
  path: '/pre-crocs',
  component: PreCrocs,
}, {
  name: 'preRegister',
  path: '/pre-register',
  component: PreRegister,
}, {
  name: 'calendar',
  path: '/calendar',
  meta: { requiresAuth: true },
  component: Calendar,
}, {
  name: 'crocs',
  path: '/crocs',
  meta: { requiresAuth: true },
  component: Crocs,
}, {
  name: 'sales',
  path: '/sales',
  meta: { requiresAuth: true },
  component: Sales,
}, {
  name: 'settings',
  path: '/settings',
  meta: { requiresAuth: true },
  component: Settings,
}, {
  name: 'users',
  path: '/users',
  meta: { requiresAuth: true },
  component: Users,
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
      // Redirect to home if already logged in
      next({ name: 'home' });
    } else {
      next();
    }
  });
};
