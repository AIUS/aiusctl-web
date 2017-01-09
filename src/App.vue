<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">AIUS</h2>
    </md-toolbar>

    <section class="main">
      <hello />
    </section>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
};
</script>

<style>
#app > .main {
  padding: 8px 24px;
}
</style>
