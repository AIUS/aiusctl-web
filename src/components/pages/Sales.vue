<template>
  <div class="sales">
    <h1>Caisse</h1>

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
          <md-table-cell><md-button class="md-icon-button" @click="addProduct(product.id)"><md-icon>add_shopping_cart</md-icon></md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
    </section>

    <section v-for="category in categories">
      <h2>Commande :</h2>
      <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Nom du produit</md-table-head>
          <md-table-head>Prix</md-table-head>
          <md-table-head>Action</md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row v-for="item in cart">
          <md-table-cell>{{ item.product.name }}</md-table-cell>
          <md-table-cell>{{ item.price.toFixed(2) }} €</md-table-cell>
          <md-table-cell><md-button class="md-icon-button" @click="removeProduct(item.id)"><md-icon>remove_shopping_cart</md-icon></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell><strong>TOTAL :</strong></md-table-cell>
          <md-table-cell><strong>{{ total.toFixed(2) }} €</strong></md-table-cell>
          <md-table-cell>
            <md-button class="md-icon-button" @click="$store.dispatch('sales/emptyCart')"><md-icon>delete</md-icon></md-button>
            <md-button class="md-icon-button"><md-icon class="md-primary">check</md-icon></md-button>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
    </section>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'sales',
  created() {
    this.$store.dispatch('sales/getProducts');
    this.$store.dispatch('sales/getCategories');
  },
  methods: {
    addProduct(id) {
      this.$store.dispatch('sales/addProduct', id);
    },
    removeProduct(id) {
      this.$store.dispatch('sales/removeProduct', id);
    },
  },
  computed: {
    ...mapGetters('sales', [
      'pending',
      'errored',
      'fetched',
      'categories',
      'cart',
      'total',
    ]),
  },
};
</script>

<style scoped>

</style>
