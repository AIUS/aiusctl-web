<template>
  <div class="sales">
    <h1>Caisse</h1>
    <p>@TODO : faire la caisse</p>
    <md-table>
    <md-table-header>
    <md-table-row>
      <md-table-head md-sort-by="nom">Nom du produit</md-table-head>
      <md-table-head md-sort-by="categorie">Catégorie</md-table-head>
      <md-table-head md-sort-by="prix">Prix</md-table-head>
      <md-table-head md-sort-by="commande"> Commande </md-table-head>
    </md-table-row>
  </md-table-header>
  <md-table-body>
    <md-table-row v-for="product in caisse">
      <md-table-cell>{{ product.Nom }}</md-table-cell>
      <md-table-cell>{{ product.Catégorie }}</md-table-cell>
    </md-table-cell>{{ product.Prix }}</md-table-cell>
  </md-table-cell>{{ product.Commande }}</md-table-cell>
    </md-table-row>
  </md-table-body>
  </md-table>
  </div>
</template>


<script>
export default {
  name: 'sales',
  data: () => ({
    caisse: [
      {
        Nom: 'Pick up',
        Catégorie: 'Snack',
        Prix: '0.3',
        Commande: '',
      },
      {
        Nom: 'Canette',
        Catégorie: 'Boisson',
        Prix: '0.5',
        Commande: '',
      },
      {
        Nom: 'Petit Pain',
        Catégorie: 'Viennoiserie',
        Prix: '0.9',
        Commande: '',
      },
    ],
  }),
};
</script>

<style scoped>

</style>
