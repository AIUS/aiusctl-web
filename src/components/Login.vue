<template>
  <div class="login">
    <h1>Connexion</h1>
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <label>Adresse mail</label>
        <md-input type="email"></md-input>
      </md-input-container>

      <md-input-container md-has-password>
        <label>Mot de passe</label>
        <md-input type="password"></md-input>
      </md-input-container>

      <router-link tag="md-button" :to="{ name: 'dashboard' }" exact class="md-raised md-primary">Connexion</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    submit: '',
  },
};
</script>

<style scoped>

</style>
