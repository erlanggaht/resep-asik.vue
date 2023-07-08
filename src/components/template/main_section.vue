<script setup>
import cards from '@/components/organism/cards.vue'



</script>
<template>

  
    <section class="area_section bg-section position-relative ">
        <div class="area_card  position-absolute shadow" style="top:-6.3rem">

          <cards/>
        
        </div>

        <div class="cakecook_img">
          <img src="@/assets/cakecook.svg" class="col-md-6 float-md-end mb-3 ms-md-3" style="width: 470px;height:470px; margin:3rem 3rem 0rem 0rem;object-fit:cover"
            alt="recipes">
        </div>
      </section>

      <div class="h-2 w-100 mt-5" style="border:dashed 1px #ccc"/>

      <!-- Section 2 -->
      <section class='area-section2 d-flex  align-items-center gap-3 ' style="margin: 1rem 0 0 0;">
        
        <div>
          <img src="@/assets/eating.svg" class="col-md-6 float-md-end mb-3 ms-md-3" style="width: 420px;height:420px;"
          alt="recipes">
        </div>

        <div class=" areacard  " >

          <h1 class="display-5  lh-base">
            <mark class=" text-white shadow-sm" style="background-color: #f7a41a;"><b>Gratis!</b></mark> 
            untuk semua resep
          </h1>
        
          <p class="pt-4 fs-5  text-break lh-base mt-4 lead text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facilis, esse accusamus dolores natus dolore aliquid ullam. Tempore eaque ullam accusamus veritatis! Dicta quia necessitatibus aspernatur voluptate eaque beatae. Delectus.
          </p>
    
        
        </div>
      </section>


 


</template>


<style scoped>

.area-section{
    position: relative;
  }
.areacard {
  padding: 0 5rem;
}

@media screen and (max-width:867px) { 
  .areacard {
    padding: 0 .5rem !important;
  }
  

}
  @media screen and (max-width:767px) {
    .area-section{
      position: relative;
    }

    .areacard {
      padding: 1rem 1rem !important;
    }
    
    .area-section2 {
      flex-direction: column;
  
    }

    .area_card {
      position: static !important;
      margin:0 1rem
    } 


    .cakecook_img img {
      display: none;
      width: 100% !important;
    }
 
  }
  

</style>
