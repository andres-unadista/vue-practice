import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import { store } from './store/store.js';
import { routes } from './routes/routes';
import Directives from './directives/CustomDirectives';

Vue.config.productionTip = false;


Vue.use(VueRouter);
Vue.use(Directives);

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
  router,
}).$mount('#app');
