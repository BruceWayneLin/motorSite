// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '../node_modules/axios-es6/dist/axios.min.js'
import VeeValidate from '../node_modules/vee-validate'
import vueLocalStorage from 'vue-localstorage'
import VueHead from 'vue-head'
import VueFacebookPixel from 'vue-analytics-facebook-pixel'
import VueGtm from 'vue-gtm'

Vue.use(VueFacebookPixel, { router })
Vue.use(VueHead)
Vue.use(VeeValidate)
Vue.use(vueLocalStorage)
Vue.config.productionTip = false

Vue.analytics.fbq.init('1882426715333419', {
  em: 'insert_email_variable,'
})
// Vue.analytics.fbq.event('ViewContent', {
//   content_name: 'Really Fast Running Shoes'
// })

Vue.use(VueGtm, {
  debug: true, // Whether or not display console logs debugs (optional)
  vueRouter: router // Pass the router instance to automatically sync with router (optional)
})

var $ = require('jquery')
window.jQuery = $
window.$ = $

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    isAplicantValidateWellorNot: false,
    isDisabledButton: false,
    readyToGoThanksPage: false,
    readyToConfirmInfo: false,
    isCompleted: false,
    readyToGoPay: false,
    pdfContentToShow: false,
    isMH: false,
    secondPageNav: false,
    processbarNu: 25,
    userSelectedProduct: {},
    applicantData: {},
    insuredData: {},
    motocycleInfo: {},
    RelatedList: [],
    AcityList: [{id: 0, name: '都市'}],
    AdistrictList: [{id: 0, name: '區'}],
    IcityList: [{id: 0, name: '都市'}],
    IdistrictList: [{id: 0, name: '區'}],
    BrandList: [],
    productCC: '',
    alertMsgs: [],
    dataId: '',
    returnMsg: '',
    showModal: false,
    userEnteredProdcutCC: '',
    motoSpeedPosition: 0
  },
  computed: {
    steps: function () {
      return [ { text: '選擇專案', stepComplete: true }, { text: '填寫資料', stepComplete: this.isCompleted }, { text: '確認付款', stepComplete: this.readyToGoPay }, { text: '要保完成', stepComplete: this.readyToGoThanksPage } ]
    }
  },
  router,
  template: '<App/>',
  components: { App },
  mounted: function () {
    axios({
      method: 'get',
      url: '/CareLineMotor/motorbike-mbr/journey/initData'
    }).then((response) => {
      var result = response.data
      this.AcityList = result.cityList
      this.AdistrictList = result.areaList
      this.IcityList = result.cityList
      this.IdistrictList = result.areaList
      this.RelatedList = result.relationshipList
      this.BrandList = result.brandList
    })
  }
})
