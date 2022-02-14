import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'

window.$ = window.jQuery = 'jquery'

// Scripts
import "@/assets/varro/js/main"
import "@/assets/varro/js/custom-dialog"

// axios.defaults.baseURL = 'http://127.0.0.1:1212'
axios.defaults.baseURL = 'http://varroconnect.pythonanywhere.com'

createApp(App).use(store).use(router, axios).mount('#varro')
