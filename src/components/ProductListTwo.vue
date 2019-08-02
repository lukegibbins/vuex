<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in products" v-bind:key="product">
        <span class="name"> {{product.name}} </span>
        <span class="name">£{{product.price}} </span>  
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    // computed reaches out directly to the store to retreive the data. No need to contact app.vue
  computed: {
    products(){
      return this.$store.state.products;
    },

    salesProducts(){
      return this.$store.getters.salesProducts;
    }
  }
}
</script>

<style>
#product-list-two{
  background: lightsalmon;
  color: black;
}
</style>
