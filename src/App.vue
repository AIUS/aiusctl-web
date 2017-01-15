<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleSidebar">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">AIUS</h2>
    </md-toolbar>

    <section class="main">
      <router-view />
    </section>

    <md-sidenav ref="sidebar" class="md-left">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">AIUS</h3>
        </div>
      </md-toolbar>

      <md-list class="dense">
        <md-list-item>
          <router-link :to="{ name: 'home' }" exact>Accueil</router-link>
        </md-list-item>
        <md-list-item v-if="logged">
          <router-link :to="{ name: 'dashboard' }" exact>Tableau de bord</router-link>
        </md-list-item>
        <md-list-item @click.capture="logout(token)" v-if="logged">
          <router-link :to="{ name: 'home' }">Déconnexion</router-link>
        </md-list-item>
        <md-list-item v-if="!logged">
          <router-link :to="{ name: 'login' }" exact>Connexion</router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  methods: {
    toggleSidebar() {
      this.$refs.sidebar.toggle();
    },
    close() {
      this.$refs.sidebar.close();
    },
    logout(token) {
      this.$store.dispatch('auth/logout', {
        token,
      });
    },
  },
  computed: {
    ...mapGetters('auth', [
      'logged',
      'token',
    ]),
  },
};
</script>

<style>
#app > .main {
  padding: 8px 24px;
}
</style>
