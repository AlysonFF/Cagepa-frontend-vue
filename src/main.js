import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'


createApp(App).use(Notifications).use(router).mount('#app')

