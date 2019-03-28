import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
