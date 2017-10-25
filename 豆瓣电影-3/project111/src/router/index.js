import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/content'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    }
  ]
})
