<script setup>
import { onMounted, ref,onBeforeMount} from 'vue';
import Loading_Skelton from '@/components_resep/moleculs/loading_skelton.vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

const router = useRouter()
const store =useStore()
const loading = ref(null)


let arr  = ref()
let ingredient = ref()
let servings = ref()
let instructions = ref ()

onBeforeMount(()=>{
    loading.value = false
})

onMounted(() => {

    arr.value = store.state.data_filter_id
    // Rapihkan Text Object
    ingredient.value = store.state.data_filter_id?.ingredients?.split("|")
    servings.value = store.state.data_filter_id?.servings?.split(" ").join(' ')
    instructions.value = store.state.data_filter_id?.instructions?.split(".")
    
    setTimeout(() => {
    

    // Loading true 
    loading.value = true
    }, 1000);
   

    // Jika Store data_filter kosong. redirect 
    if(!arr.value) router.back('')

})



</script>

<template>
    <section class="cards_section">
    <div class=" cards text-white d-flex flex-column" style="padding:0rem 3rem 2rem 5rem;width:720px">
        <div class="py-4" v-if="!loading"><Loading_Skelton/></div>
        <div class="card-me  justify-content-between align-items-center gap-4" v-if="loading" >
            <h1 style="text-align:right;padding:20px 0">{{servings}}</h1>
            <h2 class=" py-2">1. Ingredients : </h2>
            <p v-for="(m,i) in ingredient">- {{m}}</p>
            <hr/>
            <h2 class=" py-2">2. How to cook : </h2>
            <p v-for="(m,i) in instructions">- {{m}}</p>
        </div>
    </div>
</section>
</template>


<style scoped>
.cards {
    background-color: #375963;

}
.cards_section{
    position: relative;
}
.cards_section:before {
    content: "";
    width: 660px;
    height: 660px;
    position: fixed;
    background-image: url('@/assets/cooking.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    z-index: -999;
    top: 3.2rem;right: -2rem;
    object-fit: cover;
}



@media screen and (max-width:767px) {
    .cards {
        width: 100% !important;
        padding: 0px !important;
    }

    .card-me {
        padding: 1rem;
        flex-wrap: wrap;
        gap: 1rem !important
    }

    .card-me2 {
        padding: 2rem 1.3rem !important;
    }

    hr {
        display: none;
    }

}

@media screen and (max-width: 633px) {
    .arrow {
        display: none ;
    }
}
</style>