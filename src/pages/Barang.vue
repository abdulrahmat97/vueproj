<template>
    <v-content>
        <dialog-form :dialog.sync="dialog">
            <v-text-field label="Input Jumlah" v-model="dataDig.valjum" slot="input"></v-text-field>
            <v-btn color="blue darken-1" flat @click="saveData()" slot="btn">Save</v-btn>
        </dialog-form>
        <v-data-table
            :headers="headers"
            :items="getBarang"
            :loading="loading"
        >
        <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
            <template slot="items" slot-scope="props">
            <td class="text-md-left">{{ props.item.namabarang }}</td>
            <td class="text-md-left">{{ props.item.stok }}</td>
            <td class="text-md-left">
                    <v-tooltip left>
                        <router-link :to="'/barang/' + props.item.id + '/edit'" slot="activator">
                            <v-btn fab dark small color="cyan">
                                <v-icon small dark>edit</v-icon>
                            </v-btn>
                        </router-link>
                        <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip top>
                        <v-btn fab dark small color="red"  @click="deleteStok(props.item)"
                            slot="activator">
                            <v-icon dark>delete</v-icon>
                        </v-btn>
                        <span>Delete</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <v-btn round dark small color="green" @click="swdialog('masuk',props.item.id)" 
                            slot="activator">
                            <v-icon dark>archive</v-icon>
                        </v-btn>
                        <span>Barang Masuk</span>
                    </v-tooltip>

                    <v-tooltip right>
                        <v-btn round dark small color="orange" @click="swdialog('keluar',props.item.id)" 
                            slot="activator">
                            <v-icon dark>unarchive</v-icon>
                        </v-btn>
                        <span>Barang Keluar</span>
                    </v-tooltip>
                    
            </td>
            </template>
        </v-data-table>
        <router-link to="/barang/input">
            <v-fab-transition>
                <v-btn
                    color="pink"
                    dark
                    absolute
                    top
                    right
                    fab 
                >
                    <v-icon>add</v-icon>
                </v-btn>
            </v-fab-transition>
        </router-link>
    </v-content>
</template>
<script>
import Swal from 'sweetalert2'

import FormMK from '@/components/FormMK.vue'

import { mapGetters } from 'vuex'

export default {
    data(){
        return {
            // getBarang:[],
            headers:[
                { text: 'Nama Barang', value: 'namabarang', align:'left' },
                { text: 'Stok', value: 'stok', align:'left' },
                { text: 'Action', value: 'action', align:'left' },
            ],
            loading:true,
            dialog:false,
            dataDig:{
                valID:-1,
                valjum:0
            },
            // jumlahInput:0,
            valMK:'',           
        }
    },

    components:{
        dialogForm : FormMK
    },

/* eslint-disable */
    created(){
        this.$store.dispatch('fetchBarang')
            .then(res => {
                this.loading = false
             })

    },

    mounted(){
        this.$store.dispatch('fetchBarang')
    },
   
   computed:{
        ...mapGetters([
            'getBarang'
        ]),
    },

    methods:{
        swdialog(val,id){
            this.dialog=true
            this.valMK=val
            this.dataDig.valID=id
        },

        saveData(){
            if (this.valMK == 'masuk') {
                this.$store.dispatch('barangMasuk',this.dataDig)
                    .then(res => {
                        this.dialog=false
                         this.$store.dispatch('fetchBarang')
                        // location.reload(true)

                    })

            }else if (this.valMK == 'keluar'){
                this.$store.dispatch('barangKeluar',this.dataDig)
                    .then(res => {
                        this.dialog=false
                        this.$store.dispatch('fetchBarang')
                        // location.reload(true)
                    })
            }
            // console.log(this.idBarang + '|' + this.btnBK)

        },

        deleteStok(val){
             Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {                        
                        this.$store.dispatch('deleteBarang',val)
                        .then(res =>{
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            this.getBarang.splice(this.getBarang.indexOf(val),1)
                        })
                        .catch(ex =>{
                            Swal.fire(
                                'Deleted!',
                                'Delete Failed',
                                'error'
                            )
                        })
                    }
                })
        },
    }
}
</script>

<style>
 a {
        text-decoration: none;
    }
</style>
