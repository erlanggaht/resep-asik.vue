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
    
  }
})


createApp(App)
.use(store)
.mount('#app')
