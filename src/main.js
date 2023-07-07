import { createApp } from 'vue'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.vue'
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
    datas : []
    }
  },
  mutations: {
    add_datas (state,data) {
      state.datas.push(data)
    }
  },
  getters : {
    home_data (state,id1,id2,id3) {
      return state.datas.filter((m,i) => {
        
      })  
    }
  }
})


createApp(App)
.use(store)
.mount('#app')
