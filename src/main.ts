import '@csstools/normalize.css';
import '@/assets/global.css';
import '@icon-park/vue-next/styles/index.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import router from './router';

console.log(import.meta.env.MODE, '模式');
// console.log(import.meta.env.VITE_BASE_API,'url')
createApp(App).use(createPinia().use(piniaPluginPersistedstate)).use(router).mount('#app');
