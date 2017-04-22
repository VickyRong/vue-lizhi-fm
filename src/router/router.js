import find from '@/pages/find/find'
import channel from '@/pages/channel/channel'
import recommend from '@/pages/recommend/recommend'
import book from '@/pages/book/book'

const routes = [
  { path: '/', redirect: '/find'},
  { path: '/find', component: find },
  { path: '/channel', component: channel },
  { path: '/recommend', component: recommend },
  { path: '/book', component: book },
]

export default routes
