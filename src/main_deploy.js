import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(fas, fab)


//added on 2022-08-10 vue-gtag: https://matteo-gabriele.gitbook.io/vue-gtag/
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// enable this if you want to use google analytics
import VueGtag from "vue-gtag";
createApp(App).use(VueGtag, { config: { id: "G-LX4H5N8Z0Y" } }).use(VueGtag, { config: { id: "UA-3450053-63" } }).use(router).component('fa', FontAwesomeIcon).mount("#app");

// disable this if you want to use google analytics
// createApp(App).use(router).mount("#app");
