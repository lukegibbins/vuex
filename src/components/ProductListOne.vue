<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in products" v-bind:key="product">  
        <span class="name"> {{  product.name  }} </span>
        <span class="name"> £{{ product.price }} </span>
      </li>
    </ul>
    <button v-on:click="reducePrice(10)"> Reduce Price </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {  
  // computed properties deal directly with the store only
  computed: {
    products(){
      return this.$store.state.products;
    },

    // salesProducts(){
    //   return this.$store.getters.salesProducts;
    // }
    // *Alternative to the above
    ...mapGetters(['salesProducts'])
  },

  // methods are just functions which can be bound to buttons for events. methods can be used to commit mutations to the store
  methods: {
    // reducePrice: function(reducePriceParameter){
    //                        //action-name
    //   this.$store.dispatch("reducePrice", reducePriceParameter)
    // } 
    ...mapActions(['reducePrice']) //Notice, there is no need to pass the parameter in
  }
}
</script>

<style>
#product-list-one{
  background: red;
  color: white
}

</style>
