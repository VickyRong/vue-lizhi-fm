// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/router'
import './config/rem'

Vue.use(VueRouter)
/* eslint-disable no-new */

var router = new VueRouter({
	routes:routes,
  linkActiveClass: 'active'
})
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})
// router.go('/find');//------加了go()函数想去默认的页面 但是默认页面的class没有加上


// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
