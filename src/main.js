import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = 'https://vue-js-http-25008.firebaseio.com/';

Vue.http.interceptors.push((request, next)=> {
  if(request.method == "POST"){
    request.method = "PUT";
  }
  next(response => {
    response.json = () => {
      return { messages: response.body}
    }
  });
});

new Vue({
  render: h => h(App),
}).$mount('#app')
