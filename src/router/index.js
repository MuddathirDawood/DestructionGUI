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
  },{
    path: '/weaponsEra/:id',
    name: 'Weapons',
    component: () => import('../views/Weapons.vue'),
    props: true
  },{
    path: '/weapons/:id',
    name: 'Weapon',
    component: () => import('../views/Weapon.vue'),
    props: true
  },{
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
