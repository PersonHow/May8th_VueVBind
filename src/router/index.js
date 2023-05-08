import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:'VBind',
      component: ()=> import('../views/VBind.vue')
    },
    {
      path:"/home",
      name:"Home",
      component: () => import('../views/Home.vue')
    },
    {
      path:"/props",
      name:"Props",
      component: () => import('../views/Props.vue')
    }
  ]
})

export default router
