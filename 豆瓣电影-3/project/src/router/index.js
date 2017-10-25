import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/content'
import SearchFilm from '@/components/search-film'
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    {
      path: '/a',
      name: 'SearchFilm',
      component: SearchFilm
    }
  ]
})
