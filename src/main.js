import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//added on 2022-08-10 vue-gtag: https://matteo-gabriele.gitbook.io/vue-gtag/
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// enable this if you want to use google analytics
import VueGtag from "vue-gtag";
createApp(App).use(VueGtag, { config: { id: "G-LX4H5N8Z0Y" } }).use(VueGtag, { config: { id: "UA-3450053-63" } }).use(router).mount("#app");

// disable this if you want to use google analytics
// createApp(App).use(router).mount("#app");

