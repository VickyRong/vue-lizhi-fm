import Vue from 'vue'
// import VueRouter from 'vue-router'
import find from '@/components/find/find'
import channel from '@/components/channel/channel'
import recommend from '@/components/recommend/recommend'
import book from '@/components/book/book'

// Vue.use(VueRouter)

const routes = [
  { path: '/', component: find },
  { path: '/find', component: find },
  { path: '/channel', component: channel },
  { path: '/recommend', component: recommend },
  { path: '/book', component: book },
]

// var router = new VueRouter({
//   routes: routes,
//   linkActiveClass: 'active'
// });

export default routes
