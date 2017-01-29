<template>
  <md-sidenav ref="sidebar" class="md-left main-sidebar md-whiteframe-2dp">
    <md-toolbar class="md-large app-logo" md-theme="white">
      <router-link :to="{ name: 'home' }">
        <img id="logo" src="../../assets/logo.svg" />
      </router-link>
    </md-toolbar>

    <md-list class="dense">
      <md-list-item>
        <router-link :to="{ name: 'preCrocs' }">
          <md-icon>restaurant_menu</md-icon>
          <span>Réservez votre croc'</span>
        </router-link>
      </md-list-item>
      <md-list-item v-if="!logged">
        <router-link :to="{ name: 'preRegister' }">
          <md-icon>add_circle_outline</md-icon>
          <span>Pré-inscription</span>
        </router-link>
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
            <crocs-icon />
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
          <md-icon>lock_open</md-icon>
          <span>Déconnexion</span>
        </md-list-item>
      </template>

      <md-list-item v-if="!logged">
        <router-link :to="{ name: 'login' }">
          <md-icon>lock_outline</md-icon>
          <span>Connexion</span>
        </router-link>
      </md-list-item>
    </md-list>
  </md-sidenav>
</template>

<script>
import { mapGetters } from 'vuex';
import CrocsIcon from '../misc/CrocsIcon';

export default {
  name: 'sidebar',
  components: { CrocsIcon },
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

.app-logo img#logo {
  height: 150px;
  margin: 16px 0;
}
</style>
