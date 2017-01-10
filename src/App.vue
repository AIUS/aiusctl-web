<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button" @click="open">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">{{test}}</h2>
    </md-toolbar>

    <section class="main">
      <hello />
    </section>


    <md-sidenav ref="sidebar" class="md-left" @open="open" @close="close">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
    </md-sidenav>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
  computed: {
    test() {
      return this.$store.getters['ui/sidebar'];
    },
  },
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
