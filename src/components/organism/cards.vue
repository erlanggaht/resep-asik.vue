<script setup>
import card from '@/components/moleculs/card.vue'

</script>

<template>
    <div class=" cards bg-green text-white d-flex flex-column" style="padding:2rem 3rem 2rem 7rem;width:720px">
        <div class="card-me d-flex justify-content-between align-items-center gap-4">
            <card classMe="text-white" avatar="avatar1" />
            <div class="arrow bg-white rounded-pill bg-white " style="padding: 6px 7px;transform:scale(0.8)"><img
                    src="../../assets/arrow.svg" alt="arrow" height="24" width="24 " /></div>
        </div>
        <hr style="height: 0px;width:100%" />
        <div class="card-me d-flex justify-content-between align-items-center gap-4">
            <card classMe="text-white" avatar="avatar2" />
            <div class="arrow bg-white rounded-pill bg-white " style="padding: 6px 7px;transform:scale(0.8)">
                <img src="../../assets/arrow.svg" alt="arrow" height="24" width="24 " />
            </div>
        </div>
    </div>

    <div class="card-me2 d-flex flex-column gap-2 bg-white" style="padding:2rem 3rem 2rem 7rem">

        <div>
            <p class="m-0 font-weight-bold">Banyak disukai</p>
            <h1 class="pb-4">Resep Favorit</h1>
        </div>
        <div class="mt-2">
            <card classMe="text-muted" avatar="avatar3" />
            <card classMe="text-muted" avatar="avatar4"/>
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
        padding: 1rem  ;
        flex-wrap: wrap;
        gap:1rem !important
    }
  
    .card-me2 {
        padding: 2rem 1.3rem !important;
    }
  
    hr {
        display: none;
      }

}


</style>