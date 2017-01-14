<template>
  <div class="dashboard">
    <h1>Tableau de bord</h1>
    <p>@TODO : le rendre accessible uniquement aux utilisateurs connectés</p>
    <div class="tiles">
      <router-link tag="md-button" :to="{ name: 'login' }" class="md-raised md-primary tile">
        <md-icon class="tile-icon">home</md-icon>
        <md-tooltip md-direction="bottom">Accueil</md-tooltip>
      </router-link>

      <router-link tag="md-button" :to="{ name: 'dashboard' }" class="md-raised md-primary tile">
        <md-icon class="tile-icon">local_atm</md-icon>
        <md-tooltip md-direction="bottom">Caisse</md-tooltip>
      </router-link>

      <router-link tag="md-button" :to="{ name: 'dashboard' }" class="md-raised md-primary tile">
        <md-icon class="tile-icon">restaurant</md-icon>
        <md-tooltip md-direction="bottom">Gestion des crocs</md-tooltip>
      </router-link>

      <router-link tag="md-button" :to="{ name: 'dashboard' }" class="md-raised md-primary tile">
        <md-icon class="tile-icon">date_range</md-icon>
        <md-tooltip md-direction="bottom">Calendrier</md-tooltip>
      </router-link>

      <router-link tag="md-button" :to="{ name: 'dashboard' }" class="md-raised md-primary tile">
        <md-icon class="tile-icon">settings</md-icon>
        <md-tooltip md-direction="bottom">Modifier mes informations</md-tooltip>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
};
</script>

<style scoped>
.tiles {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.tile {
  padding: 25px;
}
.tile-icon {
  height: 75px;
  width: 75px;
  font-size: 75px;
}
</style>
