<script setup>
import navigasi from '@/components/moleculs/navigasi.vue'
import hero from '@/components/moleculs/hero.vue'
import area_section from '@/components/template/main_section.vue'
</script>

<template>
  <div>

    <header style="padding-bottom: 10rem;">
      <section class="container">
        <navigasi />
        <hero />
      </section>
    </header>


    <main class="d-flex flex-column bg-section ">
      <area_section/>
    </main>


  </div>
</template>

<style scoped>

header {
  background-image: url('./assets/scane.svg');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
}


@media screen and (max-width:767px) {
  header {
    background:none;
  }
  
}

</style>
