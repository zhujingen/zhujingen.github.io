import { createApp } from 'vue'
import '@/assets/style/main.css'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from "pinia"
import '@/assets/style/font.scss';

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
