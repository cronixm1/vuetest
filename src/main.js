import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './Router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router :router
}).$mount('#app')
