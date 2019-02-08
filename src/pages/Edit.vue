<template>

    <div>
        <form-edit :title="title" :barang="barang" :button="button" :action="updateData"></form-edit>
    </div>

  <!-- <v-layout align-center justify-center fluid fill-height>
        <v-flex xs12 sm8 md4>
            <v-card>
               <v-toolbar dark color="primary">
                <v-toolbar-title>Update {{barang.namabarang}}</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                <v-form>
                    <v-text-field label="Nama Barang" v-model="barang.namabarang"/>
                    <v-text-field label="Stok" v-model="barang.stok"/>
                  
                </v-form>
                </v-card-text>
                <v-card-actions>
                      <v-btn round color="primary" dark @click="updateData()">Update</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout> -->
</template>

<script>
import Axios from 'axios';
import Swal from 'sweetalert2'

import Form from '@/components/Form.vue'

export default {
    data(){
        return{
            barang:{},
            title:"Edit Form",
            button:"Update"
        }
    },

    components:{
        'formEdit' : Form
    },
    /* eslint-disable */
    methods:{
        updateData(){
            Axios.put('http://localhost:8000/api/stokbarang/'+ this.$route.params.id,
                this.barang
            )
            .then(res=>{
                console.log(res.statusText)
                Swal.fire(
                    this.barang.namabarang,
                    'Berhasil Diedit',
                    'success',
                ),
                this.$router.push('/barang')
            })
            .catch(ex=>{
               console.log(ex.statusText) 
            })

        },
    },
    created(){
        Axios.get('http://localhost:8000/api/stokbarang/' + this.$route.params.id)
        .then(r=>{
            console.log(r.data)
            this.barang = r.data
        })
        .catch(ex=>{
            console.log(ex.data)
        })
    }
}
</script>

<style>

</style>
