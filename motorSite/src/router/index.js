import Vue from 'vue'
import Router from 'vue-router'
import InfoPage from '@/components/infoPage'
import FormPage from '@/components/formPage'
import MotorFormPage from '@/components/motorFormPage'
import IndexPage from '@/components/indexPage'
import ThanksPage from '@/components/thanksPage'
import QandAPage from '@/components/qAnda'
import ErrorPage from '@/components/errorPage'
import FailPayment from '@/components/failPayment'
import NotFound from '@/components/notFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/notFound',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '/failPayment',
      name: 'failPayment',
      component: FailPayment
    },
    {
      path: '/errorPage',
      name: 'errorPage',
      component: ErrorPage
    },
    {
      path: '/qPage',
      name: 'qPage',
      component: QandAPage
    },
    {
      path: '/thanksPage',
      name: 'thanksPage',
      component: ThanksPage
    },
    {
      path: '/form',
      name: 'form',
      component: FormPage
    },
    {
      path: '/infoPage',
      name: 'infoPage',
      component: InfoPage
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
