import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/router'
import './config/rem'

Vue.use(VueRouter)

var router = new VueRouter({
	routes:routes,
  linkActiveClass: 'active'
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
