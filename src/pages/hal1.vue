<template>
    <div>
        <h2>Hello World 1</h2>
        <new-compt data1="hal 1">
            <template v-slot:hello>aaahhahs</template>
</new-compt>
        {{ tes2}}
    </div>    
</template>

<script>
import NewCompt from '@/components/NewComponent'

export default {
    data(){
        return{
            var1: 'variable 1',
            var2: 'variable 2',
            var3: 'variable 3'
        }
    },

    components:{
        NewCompt
    },

    beforeCreate(){
        // console.log("ini beforeCreate")
    },
    created(){
        // console.log("ini created")
        this.tes1()
    },
    
    methods:{
        tes1() {
        //  console.log(`ini ${this.var1}`)
        }
    },

    computed:{
        tes2(){
            return `ini ${this.var2}`
        }
    }
}
</script>

<style>

</style>

