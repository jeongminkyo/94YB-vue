import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Notice from '@/views/Notice'
import Cash from '@/views/Cash'
import TravelPost from '@/views/TravelPost'
import Calendar from '@/views/Calendar'
import SingIn from '@/views/SignIn'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notices',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/cashes',
    name: 'Cash',
    component: Cash
  },
  {
    path: '/travel_posts',
    name: 'TravelPost',
    component: TravelPost
  },
  {
    path: '/calendars',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/users/sign_in',
    name: 'SignIn',
    component: SingIn
  },
]

const router = new VueRouter({
  routes
})

export default router
