<template>
    <div>
        <v-toolbar 
            color="blue"
            dark
            tabs>
            <v-toolbar-title>Barang</v-toolbar-title>
            <v-tabs
                slot="extension"
                v-model="tab"
                color="blue"
                @click="selectedPage">
                <v-tabs-slider color="green"></v-tabs-slider>
                <v-tab v-for="item in items" :key="item">
                    {{ tab }}
                </v-tab>
            </v-tabs>
        </v-toolbar>
        <v-tabs-items v-model="tab">
            <v-tab-item 
                v-for="item in items"
                :key="item">
                <v-card-flat>
                    <slot></slot>
                </v-card-flat>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

// <script>
// export default {
//     data(){
//         return {
//             tab:null,
//             items:['Stok Barang','Barang Masuk','Barang Keluar'],
//             seleselectedPage:
//         }
//     }
// }
</script>

<style>

</style>
