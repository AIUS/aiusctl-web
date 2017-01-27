<template>
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
        <router-link :to="{ name: 'sales' }" exact>Caisse</router-link>
      </md-list-item>
      <md-list-item v-if="logged">
        <router-link :to="{ name: 'crocs' }" exact>Gestion des Crocs</router-link>
      </md-list-item>
      <md-list-item v-if="logged">
        <router-link :to="{ name: 'calendar' }" exact>Calendrier</router-link>
      </md-list-item>
      <md-list-item v-if="logged">
        <router-link :to="{ name: 'settings' }" exact>Modifier mes informations</router-link>
      </md-list-item>
      <md-list-item v-if="logged">
        <router-link :to="{ name: 'users' }" exact>Gestion des utilisateurs</router-link>
      </md-list-item>
      <md-list-item @click.capture="$store.dispatch('auth/logout')" v-if="logged">
        Déconnexion
      </md-list-item>
      <md-list-item v-if="!logged">
        <router-link :to="{ name: 'preCrocs' }" exact>Réservez votre croc'</router-link>
      </md-list-item>
      <md-list-item v-if="!logged">
        <router-link :to="{ name: 'preRegister' }" exact>Pré-inscription</router-link>
      </md-list-item>
      <md-list-item v-if="!logged">
        <router-link :to="{ name: 'login' }" exact>Connexion</router-link>
      </md-list-item>
    </md-list>
  </md-sidenav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'sidebar',
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
