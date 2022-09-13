import { createApp } from 'vue'
import App from './App.vue';

import router from './router';
import store from '@/store/index.js';
// Bootstrap 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';
// import mitt from 'mitt';
// const emitter = mitt();
// import $bus from './Event.js';
// App.provide('emitter', emitter);



createApp(App).use(store).use(router).mount('#app')

// .provide('emitter', emitter)
// App.config.globalProperties.$bus = emitter;