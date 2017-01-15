<template>
  <md-card :class="['login-card', { pending, errored, logged }]">
    <form @submit.prevent="login">
      <md-card-header>
        <div class="md-title">Connexion</div>
      </md-card-header>

      <md-card-content>
        <md-input-container>
          <label>Nom d'utilisateur</label>
          <md-input :disabled="pending || logged" v-model="username" type="text"></md-input>
        </md-input-container>
        <md-input-container md-has-password>
          <label>Mot de passe</label>
          <md-input :disabled="pending || logged" v-model="password" type="password"></md-input>
        </md-input-container>
      </md-card-content>

      <md-card-actions>
        <md-button :disabled="pending || logged" type="submit" class="md-raised md-primary">Connexion</md-button>
      </md-card-actions>
    </form>
    <md-spinner md-indeterminate />
    <md-icon class="done md-size-2x">done</md-icon>
  </md-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'login',
  data: () => ({
    username: '',
    password: '',
    transitionTimeout: null,
  }),
  watch: {
    logged(logged) {
      if (this.transitionTimeout !== null) {
        clearTimeout(this.transitionTimeout);
        this.transitionTimeout = null;
      }

      if (logged) {
        this.transitionTimeout = setTimeout(() => this.$router.push(this.$route.query.redirect || '/'), 1000);
      }
    },
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password,
      });
    },
  },
  computed: {
    ...mapGetters('auth', [
      'pending',
      'errored',
      'logged',
    ]),
  },
};
</script>

<style scoped>
.login-card {
  margin: 20px auto;
  max-width: 300px;
  position: relative;
  opacity: 1;
  transition: opacity .3s ease;
}

.login-card.logged form {
  opacity: 0;
}

.md-spinner, .done {
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  opacity: 0;
  z-index: -1;
  transition: opacity .3s ease;
}

.done {
  margin: 13px;
}

.login-card.pending .md-spinner,
.login-card.logged .done {
  opacity: 1;
}
</style>
