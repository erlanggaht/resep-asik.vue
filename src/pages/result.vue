<script setup>
import cards_result from '@/components_result/organism/cards_result.vue'
import {useRoute} from 'vue-router'

const route = useRoute() 

</script>

<template>
 

        <h1  class="title text-center p-3" style="color:#375963;text-transform:capitalize"> Resep {{route.params.search_result}}</h1>
        <cards_result/>

</template>


<style scoped>

</style>