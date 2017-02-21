<template>
  <div class="salesEdit">
    <h1>Caisse</h1>

    <p>@TODO : faire en sorte que l'on puisse ajouter/éditer/supprimer des produits et des catégories</p>

    <section v-for="category in categories">
      <h2>{{ category.name }}</h2>
      <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Nom du produit</md-table-head>
          <md-table-head>Prix</md-table-head>
          <md-table-head>Action</md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row v-for="product in category.products">
          <md-table-cell>{{ product.name }}</md-table-cell>
          <md-table-cell>{{ product.price.toFixed(2) }} €</md-table-cell>
          <md-table-cell><md-button class="md-icon-button" @click="$store.dispatch('sales/addProduct', product.id)"><md-icon>add_shopping_cart</md-icon></md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </section>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'salesEdit',
  created() {
    this.$store.dispatch('sales/getProducts');
    this.$store.dispatch('sales/getCategories');
  },
  computed: {
    ...mapGetters('sales', [
      'pending',
      'errored',
      'categories',
      'cart',
      'total',
    ]),
  },
};
</script>

<style scoped>
.tiles {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.tile {
  user-select: none;
  padding: 25px;
  margin-bottom: 12px;
  background-color: #3f51b5;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.tile > p:nth-child(2) {
  font-size: 24px;
}
</style>
