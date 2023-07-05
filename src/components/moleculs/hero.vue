<script setup>

</script>

<template>
    <div class="clearfix  my-4">

      <div class="title-hero">
        <img src="../../assets/recipe.jpg" class="col-md-6 float-md-end mb-3 ms-md-3 w-50" alt="recipes">
        <h1 class="display-5  lh-base">
          <mark class="bg-ungu-cerah text-white shadow-sm">Ayo Memasak.</mark> 
          Kami Menyediakan Banyak Resep
        </h1>
      </div>
      
        <p class="description-hero pt-4 fs-5  display-5 lh-base mt-4 lead text-muted">
         <b class="text-pink">Kalian bingung masak apa hari ini?</b> jangan bingung!! kami telah menyediakan dan mengumpulkan banyak resep dari koki ibu ibu, bapa bapa yang menjadi juara memeasak dengan resep sendirinya.
         resep ini gratis untuk di pelajari, ayoo cari resep makananan disini sekarang juga.
        </p>
  
        <button class="mt-2 btn btn-link text-decoration-none bg-ungu-cerah py-3 px-4 shadow-sm"><a href="#" class="text-white fs-6 text-decoration-none">Cari Resep</a></button>
      </div>
</template>

<style scoped>


@media screen and (max-width:767px) {
  .title-hero {
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;

  }
  .description-hero  {
    margin:0 0 2rem 0 !important
  }

  .title-hero img {
    width: 75% !important;
    margin: 2rem 0;
  }
}

</style>