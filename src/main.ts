import './assets/main.css'

// vant 函数组件样式
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import eruda from 'eruda'

if (process.env.NODE_ENV !== 'production') {
    eruda.init()
}
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
