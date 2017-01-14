<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button" @click="open">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">AIUS</h2>
    </md-toolbar>

    <section class="main">
      <router-view />
    </section>


    <md-sidenav ref="sidebar" class="md-left" @open="open" @close="close">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">AIUS</h3>
        </div>
      </md-toolbar>

      <md-list class="dense">
        <md-list-item>
          <router-link :to="{ name: 'home' }" exact>Accueil</router-link>
        </md-list-item>
        <md-list-item>
          <router-link :to="{ name: 'login' }" exact>Connexion</router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/not-found">Nico-nico~</router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'app',
  mounted() {
    this.$store.watch(() => this.$store.getters['ui/sidebar'], (newVal, oldVal) => {
      if (newVal === oldVal) return;
      if (newVal) {
        this.$refs.sidebar.open();
      } else {
        this.$refs.sidebar.close();
      }
    });
  },
  methods: {
    ...mapActions({
      open: 'ui/openSidebar',
      close: 'ui/closeSidebar',
    }),
  },
};
</script>

<style>
#app > .main {
  padding: 8px 24px;
}
</style>
