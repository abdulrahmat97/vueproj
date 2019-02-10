import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      barang:[]
  },

  getters:{
    getBarang : state => {
      return state.barang
    },
  },

  mutations: {
    setBarang : (state,data) => {
        state.barang = data
    },

  },
    /*eslint-disable*/
  actions: {
    fetchBarang: ({commit}) => {
      axios.get('http://localhost:8000/api/stokbarang')
        .then( (res) => {
            commit('setBarang', res.data) 
        })
        .catch((e) => {
            console.log(e.data)
        })
    },

    

  }
})
