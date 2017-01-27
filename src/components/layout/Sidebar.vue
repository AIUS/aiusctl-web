<template>
  <md-sidenav ref="sidebar" class="md-left main-sidebar md-whiteframe-2dp">
    <md-toolbar class="md-large app-logo" md-theme="white">
      <router-link :to="{ name: 'home' }">
        <img src="../../assets/logo.svg" />
      </router-link>
    </md-toolbar>

    <md-list class="dense">
      <md-list-item>
        <router-link :to="{ name: 'preCrocs' }">
          <md-icon style="opacity: 0.54" :md-src="crocIconUri"></md-icon>
          <span>Réservez votre croc'</span>
        </router-link>
      </md-list-item>
      <md-list-item v-if="!logged">
        <router-link :to="{ name: 'preRegister' }">Pré-inscription</router-link>
      </md-list-item>

      <template v-if="logged">
        <md-list-item>
          <router-link :to="{ name: 'sales' }">
	    <md-icon>shopping_cart</md-icon>
	    <span>Caisse</span>
	  </router-link>
        </md-list-item>
        <md-list-item>
          <router-link :to="{ name: 'crocs' }">
	    <md-icon>shopping_cart</md-icon>
	    <span>Gestion des Crocs</span>
	  </router-link>
        </md-list-item>
        <md-list-item>
          <router-link :to="{ name: 'calendar' }">
	    <md-icon>event</md-icon>
	    <span>Calendrier</span>
	  </router-link>
        </md-list-item>
        <md-list-item>
          <router-link :to="{ name: 'settings' }">
	    <md-icon>settings</md-icon>
	    <span>Modifier mes informations</span>
	  </router-link>
        </md-list-item>
        <md-list-item>
          <router-link :to="{ name: 'users' }">
	    <md-icon>build</md-icon>
	    <span>Gestion des utilisateurs</span>
	  </router-link>
        </md-list-item>
        <md-list-item @click.capture="$store.dispatch('auth/logout')">
          Déconnexion
        </md-list-item>
      </template>

      <md-list-item v-if="!logged">
        <router-link :to="{ name: 'login' }">Connexion</router-link>
      </md-list-item>
    </md-list>
  </md-sidenav>
</template>

<script>
import { mapGetters } from 'vuex';
import crocIconUri from '../../assets/crocs-icon.svg';

export default {
  name: 'sidebar',
  data() {
    return { crocIconUri };
  },
  computed: {
    ...mapGetters('auth', ['logged']),
  },
  methods: {
    toggle() {
      this.$refs.sidebar.toggle();
    },
  },
  watch: {
    $route() {
      // Close the sidebar when changing route
      this.$refs.sidebar.close();
    },
  },
};
</script>

<style>
@media (min-width: 1281px) {
  .main-sidebar.md-sidenav .md-sidenav-content {
    top: 0;
    pointer-events: auto;
    transform: translate3d(0, 0, 0);
    box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
  }

  .main-sidebar.md-sidenav .md-backdrop {
    display: none;
  }
}

.app-logo {
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
}

.app-logo a {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}

.app-logo img {
  height: 150px;
  margin: 16px 0;
}
</style>
