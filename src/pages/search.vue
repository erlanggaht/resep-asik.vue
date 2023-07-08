<script setup>
import { onUpdated, ref } from 'vue';
import {useRouter} from 'vue-router'

const router = useRouter()
const input_search = ref('sayur')

function search_submit() {
router.push(`/cari_resep/${input_search.value}`)
}

</script>

<template>
    <main>
    <div class="main_search position-absolute top-50 start-50 translate-middle">        
        <h1  class="title text-center p-3" style="color:#ffa71a"> Cari Resep </h1>
        <form class="d-flex">
            <input class="shadow-sm" placeholder="sayur" v-model="input_search" />
            <button class="shadow-sm" @click.prevent="search_submit">Sub</button>
        </form>
    </div>
</main>
</template>


<style scoped>
.title {
    filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
    text-transform: capitalize;
}
main {
    width: 100vw;
    height: 100vh;
    position: relative;
}
main:before {
    content: "";
    position: absolute;
    width: 80%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-image: url('@/assets/footerils.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.3;
    transition: ease-out .7s;

}
main:hover:before {
    opacity: .9;
    transition: ease-out .7s;
}
form {
    margin-top:.3rem
}

form input {
    padding: .8rem 4rem .8rem 1rem;
    margin-right:6px ;
    border: solid 0px #ccc;
    
}

form button {
    outline: none;
    border: solid 0px #ccc;
    padding: .8rem 1rem;
    background-image: url('@/assets/search.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    color: transparent;
    background-color: #fff;
}


@media screen and (max-width:588px) {
    main:before {
        width: 100%;
    }
}
</style>