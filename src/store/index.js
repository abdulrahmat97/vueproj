import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import Swal from 'sweetalert2'

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
       return new Promise((resolve, reject) => {
        axios.get('http://localhost:8000/api/stokbarang')
        .then( (res) => {
          resolve(res)
          commit('setBarang', res.data)
        })
        .catch((e) => {
          reject(e)
          console.log(e.data)
        })
        
      })
      
     
    },

    deleteBarang: ({commit},payload) => {
     axios.delete(`http://localhost:8000/api/stokbarang/${payload.id}`)
      .then(res => {
          Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
          )
      })
      .catch(ex=>{
          console.log(ex.data)
      })
    },

    barangMasuk: ({commit},payload) =>{
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/barangmasuk/',{
            id: payload.valID,
            jmlhMasuk : payload.valjum
        })
          .then( res => {
            resolve(res)
            console.log(res.data)
          })
          .catch( ex => {
            console.log(ex.data)
            reject(ex)
          })        
      });

    },

    barangKeluar: ({commit},payload) =>{
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/barangkeluar/',{
            id: payload.valID,
            jmlhKeluar : payload.valjum
        })
          .then( res => {
            resolve(res)
            
            console.log(res.data)
          })
          .catch( ex => {
            console.log(ex.data)
            reject(ex)
          })        
      });

    },

  }
})
