<script setup>
import cards_result from '@/components_resep/organism/cards_resep.vue'
import {useRoute} from 'vue-router'

const route = useRoute() 

</script>

<template>
 

        <h1  class="title text-center p-3" style="color:#375963;text-transform:capitalize"> Recipe {{route.params.result_title}}</h1>
        <cards_result/>

</template>


<style scoped>

</style>