import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from '@/views/Home.vue'
import UtmsTool from '@/views/UtmsTool.vue'
import TemplatesTool from '@/views/TemplatesTool.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/utms-tool', name: 'UTMsTool', component: UtmsTool},
        {path: '/templates-tool', name: 'TemplatesTool', component: TemplatesTool}
    ]
})

createApp(App)
.use(router)
.mount('#app')
