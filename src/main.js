import { createApp } from "vue";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import { createStore } from "vuex";
import getData_beberapa1, {
  getData_beberapa2,
} from "./utility/get_beberapa_data";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/home.vue";
import Search from "@/pages/search.vue";
import Result from '@/pages/result.vue'
import Resep from '@/pages/resep.vue'


const store = createStore({
  state() {
    return {
      datas: [],
      data_filter1: [],
      data_filter2: [],

      data_filter_id : ''
    };
  },
  mutations: {
    add_datas(state, data) {
      state.datas.push(data);
    },
    get_beberapa1(state, data) {
      const result_filter = getData_beberapa1(data);
      state.data_filter1.push(result_filter);
    },
    get_beberapa2(state, data) {
      const result_filter = getData_beberapa2(data);
      state.data_filter2.push(result_filter);
    },

    add_data_id(state,data) {
      state.data_filter_id = data
    }
  },
});

// Rout
const routes = [
  { path: "/", component: Home },
  {path : "/resep/:result_title",component : Resep},
  { path: "/cari_resep", component: Search },
  { path: "/cari_resep/:search_result", component: Result }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(store).mount("#app");
