
<template>
    <v-content>
        <v-data-table
            :headers="headers"
            :items="datas"
        >
            <template slot="items" slot-scope="props">
            <td class="text-md-left">{{ props.item.namabarang }}</td>
            <td class="text-md-left">{{ props.item.stok }}</td>
            <td class="text-md-left">
                    <router-link :to="'/barang/' + props.item.id + '/edit'">
                        <v-btn fab dark small color="cyan">
                            <v-icon small dark>edit</v-icon>
                        </v-btn>
                    </router-link>

                    <v-btn fab dark small color="red" @click="deleteStok(props.item)">
                        <v-icon dark>delete</v-icon>
                    </v-btn>
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

import Axios from 'axios'
import Swal from 'sweetalert2'

export default {
    data(){
        return {
            datas:[],
            headers:[
                { text: 'Nama Barang', value: 'namabarang', align:'left' },
                { text: 'Stok', value: 'stok', align:'left' },
                { text: 'Action', value: 'action', align:'left' },
            ],
        }
    },
/* eslint-disable */
    created(){
        Axios.get('http://localhost:8000/api/stokbarang')
        .then( (res) => {
            this.datas= res.data
        })
        .catch((e) => {
            console.log(e.data)
        })
    },

    methods:{
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
                        Axios.delete(`http://localhost:8000/api/stokbarang/${val.id}`)
                        .then(res => {

                            this.datas.splice(this.datas.indexOf(val),1)

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            console.log(res.status + ' : ' + res.statusText)
                        })
                        .catch(ex=>{
                            console.log(ex.data)
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
