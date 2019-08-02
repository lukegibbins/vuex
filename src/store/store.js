import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    // Raw Data (possibly from db)
    state:{
        products:[
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80},
          ]
    },

    // Used to retrieve state data. This can also be manipulated as so...
    getters:{
        salesProducts: state => {
            var salesProducts = state.products.map(p => {
                return {
                  name: "**" + p.name + "**",
                  price: p.price/2 + 1
                }
              });
            return salesProducts;            
        }
    },

    // Mutations can be called by components (.vue files) to directly change raw data in the state/state of the raw data :). *mutations are committed*.
    mutations:{
        reducePrice: (state, payload) => {
            state.products.forEach(p => {
                p.price -= payload;
            })
        },

        standardMutation: state => {
            //do nothing. This is to show the standard setup
        }
    },

    // actions are DISPATCHED from components to initiate MUTATIONS.** Actions make mutation requests SYNCHRONOUS
    // PAYLOAD refers to parameters passed in dispatch from component method
    actions:{
        reducePrice: (context, payload) => {
            context.commit("reducePrice", payload);   //name of mutation 
        },

        standardMethod: context =>{
            //do nothing. This is to show the standard setup
            context.commit("standardMutation");
        }
    }
})

