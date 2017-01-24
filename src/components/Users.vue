<template>
  <div class="users">
    <h1>Gestion des utilisateurs</h1>
    <md-table v-once>
      <md-table-header>
        <md-table-head>ID</md-table-head>
        <md-table-head>Nom</md-table-head>
        <md-table-head>Prénom</md-table-head>
        <md-table-head>Adresse mail</md-table-head>
        <md-table-head>Actions</md-table-head>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(row, index) in 42" :key="index">
          <md-table-cell>{{ row }}</md-table-cell>
          <md-table-cell>Doe</md-table-cell>
          <md-table-cell>John</md-table-cell>
          <md-table-cell>john.doe@example.com</md-table-cell>
          <md-table-cell><a>Editer</a> - <a>Supprimer</a></md-table-cell>
        </md-table-row>
      </md-table-body>
  </div>
</template>

<script>
export default {
  name: 'users',
};
</script>

<style scoped>
</style>
