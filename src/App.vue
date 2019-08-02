<template>
  <div id="app">

    <!-- Reference to component1 -->
    <!-- Bind data from products to component -->
    <product-list-one> </product-list-one>

    <!-- Reference to component2 -->
    <!-- Bind data from products to component -->
    <product-list-two> </product-list-two>

  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";

export default {
  components:{
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
