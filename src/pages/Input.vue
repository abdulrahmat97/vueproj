<template>
    <v-layout align-center justify-center fluid fill-height>
        <v-flex xs12 sm8 md4>
            <v-card>
               <v-toolbar dark color="primary">
                <v-toolbar-title>Input Barang</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                <v-form>
                    <v-text-field label="Nama Barang" v-model="namabarang"/>
                    <v-text-field label="Stok" v-model="stok"/>
                  
                </v-form>
                </v-card-text>
                <v-card-actions>
                      <v-btn round color="primary" dark @click="postData()">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import Axios from 'axios';
import Swal from 'sweetalert2'
export default {
    name:'inputBarang',
    data(){
        return{
            namabarang:'',
            stok:''
        }
    },
    /* eslint-disable */
    methods:{
        postData(){
            Axios.post('http://localhost:8000/api/stokbarang',{
                namabarang:this.namabarang,
                stok:this.stok
            })
            .then(res=>{
                console.log(res.statusText),
                Swal.fire(
                    'Data',
                    'Berhasil Diinput',
                    'success',
                ),
                this.$router.push('/barang')
            })
            .catch(ex=>{
               console.log(ex.statusText) 
            })

        },
    }
}
</script>

<style>

</style>
