import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/indexPage'
import FormPage from '@/components/formPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: IndexPage
    },
    {
      path: '/form',
      name: 'form',
      component: FormPage
    }
  ]
})
