<script setup>
import CallAPI from '@/API/api_result.js'
import card_result from '@/components_result/moleculs/card_result.vue'
import { onBeforeMount, onMounted, ref } from 'vue';
import Loading_Skelton from '@/components_result/moleculs/loading_skelton.vue'
import {useStore} from 'vuex'
import {useRoute,useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
const store =useStore()
const datas = ref([])
const loading = ref(null)


onBeforeMount(()=>{
    loading.value = false
})
onMounted(async()=>{
    const params = route.params
    const response =await CallAPI(params)
    setTimeout(()=>{
        store.commit('add_datas',response)
        datas.value = store.state.datas[0]
        loading.value = true    
    },1000)
        
})

function filt (data) {
    store.commit('add_data_id',data)
    router.push('/resep/'+data.title)
}

 
</script>

<template>
  
    <section class="cards_section">
    <div class=" cards text-white d-flex flex-column" style="padding:0rem 3rem 2rem 5rem;width:720px">
        <div class="py-4" v-if="!loading"><Loading_Skelton/></div>
        <div class="card-me d-flex justify-content-between align-items-center gap-4" v-if="loading" v-for="(data,index) in datas" :key="index">
            <card_result 
            @click="filt(data)"
            :title="data.title" 
            :instructions="data.instructions"  
            :index = 'index'
            classMe="text-white" avatar="avatar"  />
            <div class="arrow bg-white rounded-pill bg-white  " style="padding: 6px 7px;transform:scale(0.8)">
                <img
                    src="../../assets/arrow.svg" alt="arrow" height="24" width="24 " /></div>
        </div>
        <hr style="height: 0px;width:100%" />
    </div>
</section>
</template>


<style scoped>
.cards {
    background-color: #375963;
    height:95vh;
    overflow-y: auto;
    position: fixed
}
.cards_section{
    position: relative;
}
.cards_section:before {
    content: "";
    width: 660px;
    height: 660px;
    position: fixed;
    background-image: url('@/assets/recipe.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    z-index: -999;
    top: 3.2rem;right: -2rem;
    object-fit: cover;
}

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

@media screen and (max-width: 633px) {
    .arrow {
        display: none ;
    }
}
</style>