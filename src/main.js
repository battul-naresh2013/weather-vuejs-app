import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import app from './app.vue';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(app),
}).$mount('#app');
