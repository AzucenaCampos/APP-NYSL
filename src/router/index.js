import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: () => import( '../views/User.vue')
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    component: () => import( '../views/Chat.vue')
  },
  {
    path: '/more',
    name: 'More',
    component: () => import( '../views/More.vue')
  },
  {
    path: '/month',
    name: 'Month',
    component: () => import( '../views/Month.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/user-Info',
    name: 'UserInfo',
    component: () => import( '../views/UserInfo.vue')
  },
  {
    path: '/detalles/:index',
    name: 'Detalles',
    component: () => import( '../views/Detalles.vue')
  },
  {
    path: '/detalles2/:index',
    name: 'Detalles2',
    component: () => import( '../views/Detalles2.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import( '../views/Gallery.vue')
  },
  {
    path: '/locations',
    name: 'Locations',
    component: () => import( '../views/Locations.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
