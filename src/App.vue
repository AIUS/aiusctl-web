<template>
  <div id="app">
    <md-layout md-column>
      <md-toolbar>
        <md-button class="md-icon-button" @click="toggleSidebar">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title">AIUS</h2>
      </md-toolbar>

      <section class="main">
        <transition name="fade" appear mode="out-in">
          <router-view />
        </transition>
      </section>
    </md-layout>

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
        <md-list-item @click.capture="logout(token)" v-if="logged">
          <router-link :to="{ name: 'login' }">Déconnexion</router-link>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  watch: {
    logged(logged) {
      if (this.transitionTimeout !== null) {
        clearTimeout(this.transitionTimeout);
        this.transitionTimeout = null;
      }

      if (!logged) {
        this.transitionTimeout = setTimeout(() => this.$router.push('/login'), 1000);
      }
    },
  },
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
      // this.$router.go('/login');
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
body {
  height: 100%;
}

#app {
  height: 100%;
}

#app > .md-layout {
  min-height: 100%;
}

#app > .md-layout > .main {
  flex: 1;
  padding: 8px 24px;
}

#app > .md-layout > .main > * {
  transform: translate3d(0, 0, 0);
}

.fade-enter-active, .fade-leave-active {
  transform: translate3d(0, 0, 0);
  transition: opacity .2s, transform .2s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 20px, 0)!important;
}
</style>
