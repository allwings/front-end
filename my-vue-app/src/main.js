import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

import Axios from 'axios';//引入axios
app.config.globalProperties.Axios=Axios //全局配置axios

app.use(router)
app.mount('#app')
