<script setup>
import card from '@/components/moleculs/card.vue'
import { useStore } from 'vuex';
import {ref,onMounted,onBeforeMount} from 'vue'
import CallAPI from '@/API/api_home.js'


const stores = useStore()
const datas1 = ref()
const datas2 = ref()




onMounted(async() => {
    const response = await CallAPI()
    datas1.value =  stores.state.data_filter1[0]  
    datas2.value =  stores.state.data_filter2[0]      
    stores.commit('get_beberapa1',response)
    stores.commit('get_beberapa2',response)
})

 
</script>

<template>
    
    <div class=" cards bg-green text-white d-flex flex-column" style="padding:2rem 3rem 2rem 7rem;width:720px">
        <div class="card-me d-flex justify-content-between align-items-center gap-4" v-for="(data,index) in datas1" :key="index">
            <card :title="data.title" :instructions="data.instructions"  classMe="text-white" :avatar="`avatar${index+1}`" />
            <div class="arrow bg-white rounded-pill bg-white " style="padding: 6px 7px;transform:scale(0.8)"><img
                    src="../../assets/arrow.svg" alt="arrow" height="24" width="24 " /></div>
        </div>
        <hr style="height: 0px;width:100%" />
    </div>

    <div class="card-me2 d-flex flex-column gap-2 bg-white" style="padding:2rem 3rem 2rem 7rem">

        <div>
            <p class="m-0 font-weight-bold">Banyak disukai</p>
            <h1 class="pb-4">Resep Favorit</h1>
        </div>
        <div class="mt-2"   v-for="(data,index) in datas2" :key="index">
            <card  :title="data.title" :instructions="data.instructions" classMe="text-muted" :avatar="`avatar${index+3}`" />
        </div>
    </div>
</template>


<style scoped>
.card-me:hover {
    opacity: 0.8;
    cursor: text;
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
</style>