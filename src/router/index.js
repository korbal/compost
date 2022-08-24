import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ItemDetails from '../views/ItemDetails.vue'
import Suggest from '../views/Suggest.vue'
import SuggestThanks from '../views/SuggestThanks.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:name',
    name: 'ItemDetails',
    component: ItemDetails,
    props: true
  },
  {
    path: '/suggest',
    name: 'Suggest',
    component: Suggest,
    props: true
  },
  {
    path: '/thanks-for-suggesting',
    name: 'SuggestThanks',
    component: SuggestThanks,

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
