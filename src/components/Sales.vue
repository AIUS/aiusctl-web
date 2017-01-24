<template>
  <div class="sales">
    <h1>Caisse</h1>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Nom du produit</md-table-head>
          <md-table-head>Catégorie</md-table-head>
          <md-table-head>Prix</md-table-head>
          <md-table-head>Action</md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row v-for="product in products">
          <md-table-cell>{{ product.name }}</md-table-cell>
          <md-table-cell>{{ product.category }}</md-table-cell>
          <md-table-cell>{{ product.price }} €</md-table-cell>
          <md-table-cell><a>Ajouter à la commande</a></md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>

    <h2>Commande :</h2>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Nom du produit</md-table-head>
          <md-table-head>Catégorie</md-table-head>
          <md-table-head>Prix</md-table-head>
          <md-table-head>Quantité</md-table-head>
          <md-table-head>Action</md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row>
          <md-table-cell>Canette</md-table-cell>
          <md-table-cell>Boisson</md-table-cell>
          <md-table-cell>0.5 €</md-table-cell>
          <md-table-cell>42</md-table-cell>
          <md-table-cell><a>Retirer</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>Petit Pain</md-table-cell>
          <md-table-cell>Viennoiserie</md-table-cell>
          <md-table-cell>0.9 €</md-table-cell>
          <md-table-cell>1</md-table-cell>
          <md-table-cell><a>Retirer</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell><strong>TOTAL :</strong></md-table-cell>
          <md-table-cell><strong>21.90 €</strong></md-table-cell>
          <md-table-cell></md-table-cell>
          <md-table-cell><md-button class="md-icon-button md-raised"><md-icon>delete</md-icon></md-button></md-table-cell>
          <md-table-cell><md-button class="md-icon-button md-raised md-primary"><md-icon>check</md-icon></md-button></md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>


<script>
export default {
  name: 'sales',
  data: () => ({
    products: [
      {
        name: 'Pick up',
        category: 'Snack',
        price: 0.3,
      },
      {
        name: 'Canette',
        category: 'Boisson',
        price: 0.5,
      },
      {
        name: 'Petit Pain',
        category: 'Viennoiserie',
        price: 0.9,
      },
    ],
  }),
};
</script>

<style scoped>

</style>
