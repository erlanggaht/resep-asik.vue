<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  classMe: String,
  link: String,
  avatar: String,
  title: String,
  instructions : String,
  index : Number
})

const class_style = {
  p: `descript-card text-wrap bd-highlight overflow-hidden lh-base ${props.classMe}`,
  avatar: ` rounded-pill shadow ${props.avatar}`
}


</script>

<template>
  <div class="card_content d-flex align-items-center gap-4">
    <div>
    <p class="fs-5 display-5 fw-normal my-3 rounded-pill px-2 py-1" style="color:#375963;background-color:#eee">{{index +1}} </p>
  </div>
    <div  >
      <p class=" fs-5 display-5 fw-normal my-3" style="text-transform: capitalize;"> {{props.title}}</p>
      <p :class="[class_style.p]" style="width: 360px;height:1.5rem">{{props.instructions}}</p>
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

.avatar {
  width: 42px;
  height: 42px;
  background-position: center .4rem;
  background-size: contain;
  background-repeat: no-repeat;
}

.avatar {
  background-image: url('@/assets/cookie.svg');
  background-color: #f5984b;
}


@media screen and (max-width:767px) { 
  .card_content {
    width: 530px;
  }
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