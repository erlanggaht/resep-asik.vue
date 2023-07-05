<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  classMe: String,
  link: String,
  avatar: String
})

const class_style = {
  p: `descript-card text-wrap bd-highlight overflow-hidden lh-base ${props.classMe}`,
  avatar: ` rounded-pill shadow ${props.avatar}`
}


</script>

<template>
  <div class="d-flex align-items-center gap-4">
    <div :class="class_style.avatar"></div>
    <div>
      <p class=" fs-5 display-5 fw-normal my-3">Goreng Sayur (Deep Fried Vegetables)</p>
      <p :class="[class_style.p]" style="width: 360px;height:1.5rem">To make the batter, pour the flour and the salt in a
        bowl and add the water. Whisk slowly and then vigorously until smooth. Wash all the vegetables and cut them into
        chunky bite size. Skewer alternate vegetables with the satay stick. Dip the skewered vegetables in the batter and
        deep fry until golden brown. Serve hot.</p>
    </div>
  </div>
</template>

<style scoped>
.descript-card {
  position: relative;
  padding: 0 1rem 0 0rem;
}

.descript-card:after {
  position: absolute;
  top: 0;
  right: 5px;
  content: '...';
  display: inline-block;
  opacity: 0.5;

}

.avatar1,
.avatar2,
.avatar3,
.avatar4 {
  width: 42px;
  height: 42px;
  background-position: center .4rem;
  background-size: contain;
  background-repeat: no-repeat;
}

.avatar1 {
  background-image: url('../../assets/fruits.svg');
  background-color: #fca14e;
}

.avatar2 {
  background-image: url('../../assets/fired.svg');
  background-color: #93b339;

}

.avatar3 {
  background-image: url('../../assets/cookie.svg');
  background-color: #f5984b;

}

.avatar4 {
  background-image: url('../../assets/eggplant.svg');
  background-color: #608b5d;

}

@media screen and (max-width:767px) { 
  .descript-card {
    width: 100% !important;
    
  } 
  .avatar1,
  .avatar2,
  .avatar3,
  .avatar4 { 

    width: 250px;
   }
  
}

@media screen and (max-width:564px) {
  .avatar1,
  .avatar2,
  .avatar3,
  .avatar4 {
   display: none;
  }

}

</style>