<template>
  <md-sidenav ref="sidebar" class="md-left">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">AIUS</h3>
      </div>
    </md-toolbar>

    <md-list class="dense">
      <md-list-item>
        <router-link :to="{ name: 'home' }" exact>
          <md-icon>home</md-icon>
          <span>Accueil</span>
        </router-link>
      </md-list-item>
      <md-list-item>
        <router-link :to="{ name: 'preCrocs' }">
          <md-icon style="opacity: 0.54" :md-src="iconUri"></md-icon>
          <span>Réservez votre croc'</span>
        </router-link>
      </md-list-item>
      <md-list-item>
        <router-link :to="{ name: 'preRegister' }">Pré-inscription</router-link>
      </md-list-item>

      <template v-if="logged">
        <md-list-item>
          <router-link :to="{ name: 'sales' }">Caisse</router-link>
        </md-list-item>
        <md-list-item>
          <router-link :to="{ name: 'crocs' }">Gestion des Crocs</router-link>
        </md-list-item>
        <md-list-item>
          <router-link :to="{ name: 'calendar' }">Calendrier</router-link>
        </md-list-item>
        <md-list-item>
          <router-link :to="{ name: 'settings' }">Modifier mes informations</router-link>
        </md-list-item>
        <md-list-item>
          <router-link :to="{ name: 'users' }">Gestion des utilisateurs</router-link>
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
import iconUri from '../../assets/crocs-icon.svg';

export default {
  name: 'sidebar',
  data() {
    return { iconUri };
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
