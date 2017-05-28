import Vue from 'vue'
import Router from 'vue-router'
import FormPage from '@/components/formPage'
import MotorFormPage from '@/components/motorFormPage'
import IndexPage from '@/components/indexPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/form',
      name: 'form',
      component: FormPage
    },
    {
      path: '/motorForm',
      name: 'motorForm',
      component: MotorFormPage
    },
    {
      path: '/',
      name: 'indexPage',
      component: IndexPage
    }
  ]
})
