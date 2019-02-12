<template>
    <v-layout row justify-center>
        <v-dialog
            v-model="dialog"
            persistent
            max-width="300px">
            <v-card>
                <v-card-title>
                    <span class="headline">Input Jumlah</span>
                </v-card-title>

                <v-card-text color="white">
                    <v-container grid-list-md>
                        <v-layout wrap>
                                <v-flex xs12 sm6 md8>
                                    <v-form>
                                    <slot name="input"></slot>
                                    
                                    </v-form>
                                </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="close()">Close</v-btn>
                    <slot name="btn"></slot>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {
/*eslint-disable*/
    data(){
        return{
            dataIn:{
                id: this.idBarang,
                jumlahInput:0
            }
        }
    },

    props:['dialog'],
        

    computed:{

    //     dialogCal:{
    //         get: function (){
    //             return this.dialog
    //         },
    //         set: function (val){
    //             this.$emit('update:dialog', val);
    //         }
    //     }
    },

    
    methods:{
        close(){
            this.dialog = false
        },

        // saveData(){

        //     if (this.valBK == 'masuk') {
        //         this.$store.dispatch('barangMasuk',this.dataIn)
        //             .then(res => {
        //                 this.close()
        //             })

        //     }else if (this.valBK == 'keluar'){
        //         //
        //     }
        // }
    },

    watch:{
        dialog(val) {
            this.$emit('update:dialog',val)
        },

        // valBK(val){
        //     this.$emit('update:valBK',val)
        // },

        // idBarang(val){
        //     this.$emit('update:idBarang',val)
        // },

        // jumlahInput(val){
        //     this.$emit('update:jumlahInput',val)
        // }

    }
}
</script>

<style>

</style>
