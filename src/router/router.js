import find from '@/components/find/find'
import channel from '@/components/channel/channel'
import recommend from '@/components/recommend/recommend'
import book from '@/components/book/book'

const routes = [
  { path: '/', redirect: '/find'},
  { path: '/find', component: find },
  { path: '/channel', component: channel },
  { path: '/recommend', component: recommend },
  { path: '/book', component: book },
]

export default routes
