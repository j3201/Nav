import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path:'/',
      component:home,
      redirect:'/index',
      children:[
        {
          path:'/index',
          name:'index',
          component:()=>import('../components/Nav/index.vue'),
          redirect:'/tuijian',
          children:[
            {
              path:'/tuijian',
              name:'tuijian',
              component:()=>import('../components/tab/tuijian.vue')
            },
            {
              path:'/dongtai',
              name:'dongtai',
              component:()=>import('../components/tab/dongtai.vue')
            }
          ]
        },
        {
          path:'/blog',
          name:'blog',
          component:()=>import('../components/Nav/blog.vue')
        }
      ]
    }
]

const router = new VueRouter({
  routes
})

export default router
