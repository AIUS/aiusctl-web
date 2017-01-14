import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from './components/Hello';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

Vue.use(VueRouter);

const routes = [
  { name: 'home', path: '/', component: Hello },
  { name: 'login', path: '/login', component: Login },
  { name: 'dashboard', path: '/dashboard', component: Dashboard },
];

export default new VueRouter({
  routes,
});
