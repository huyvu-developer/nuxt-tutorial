import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import store from './store'

const app = createApp(App) // ✅ Tạo Vue app instance
.use(store)
app.use(router)            // ✅ Kích hoạt router
app.mount('#app')          // ✅ Gắn vào DOM
