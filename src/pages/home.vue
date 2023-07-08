<script setup>
import navigasi from '@/components/moleculs/navigasi.vue'
import hero from '@/components/moleculs/hero.vue'
import area_section from '@/components/template/main_section.vue'
import Footer from '@/components/template/footer.vue';
import { onBeforeMount, ref } from 'vue';
import loading_fn from '@/utility/loading.js'
const loading = ref(null)

// Function loading 

onBeforeMount(() => {
    loading_fn(loading)
})






</script>

<template>
  <div class="loading" style="height: 100vh;display:grid;place-items:center" v-if="loading == true">
    <div class="loader" >Loading...</div>
  </div>
  <section v-if="!loading">
    <div id='lineScroll' className='position-fixed bg-ungu-cerah d-block shadow-sm' style="top:0;left:0;right:0;" />

    <header style="padding-bottom: 10rem;">
      <section class="container">
        <navigasi />
        <hero />
      </section>
    </header>


    <main class="d-flex flex-column bg-section ">
      <area_section />
    </main>
   
    <Footer/>

  </section>
</template>

<style scoped>
header {
  background-image: url('@/assets/scane.svg');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
}

.loading {
  background-image: url('@/assets/footerils.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right 2.5rem;
  object-fit: cover;
}

#lineScroll {
  z-index: 99999;
  height: 10px;
  border-radius: 0 0 0 0 ;
}


@media screen and (max-width:767px) {
  header {
    background: none;
  }

}</style>
