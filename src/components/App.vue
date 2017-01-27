<template>
  <div id="app">
    <md-theme :md-name="$route.meta.theme">
      <sidebar ref="sidebar" />

      <div class="page-content">
        <md-toolbar>
          <md-button class="md-icon-button hamburger" @click="toggleSidebar">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title">{{ $route.meta.title || "AIUS" }}</h2>
        </md-toolbar>

        <section class="main">
          <transition name="fade" appear mode="out-in">
            <router-view />
          </transition>
        </section>
      </div>
    </md-theme>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Sidebar from './layout/Sidebar';

export default {
  name: 'app',
  components: {
    Sidebar,
  },
  watch: {
    logged(logged) {
      // Redirect to login page w/ redirect
      if (!logged) {
        this.$router.push({
          name: 'login',
          query: {
            redirect: this.$route.fullPath,
          },
        });
      }
    },
  },
  methods: {
    toggleSidebar() {
      this.$refs.sidebar.toggle();
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

#app .page-content {
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}

#app .page-content > .main {
  flex: 1;
  padding: 8px 24px;
  overflow: auto;
}

#app .page-content > .main > * {
  transform: translate3d(0, 0, 0);
}

@media (min-width: 1281px) {
  #app .page-content {
    margin-left: 304px;
  }

  .md-toolbar .md-title {
    margin-left: 8px;
  }

  .hamburger {
    display: none;
  }
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
