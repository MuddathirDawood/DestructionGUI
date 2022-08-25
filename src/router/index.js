import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },{
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },{
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },{
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },{
    path: '/eras/:id',
    name: 'Eras',
    component: () => import('../views/Eras.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
