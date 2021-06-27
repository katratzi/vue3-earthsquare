import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// import UserProfile from "../views/UserProfile";

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
  // {
  //   path: '/user:userid', // start with /
  //   name: 'UserProfile',
  //   component: UserProfile,
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
