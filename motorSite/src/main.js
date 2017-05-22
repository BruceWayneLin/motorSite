// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

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
  components: { App }
})
