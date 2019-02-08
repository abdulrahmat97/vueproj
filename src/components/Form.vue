<template>
    <div>
    <v-layout align-center justify-center fluid fill-height>
            <v-flex xs12 sm8 md4>
                <v-card>
                <v-toolbar dark color="primary">
                    <v-toolbar-title>{{title}}</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                    <v-form>
                        <v-text-field label="Nama Barang" v-model="barang.namabarang"/>
                        <v-text-field label="Stok" v-model="barang.stok"/>
                    
                    </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn round color="primary" dark @click="action">{{button}}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    props:['title','barang','button','action']
}
</script>

<style>

</style>
