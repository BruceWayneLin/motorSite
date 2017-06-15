<template>
  <div id="app">
    <router-view>
    </router-view>
    <footer class="text-center">
      <p>本站網路投保服務，由『凱萊保險代理人股份有限公司』提供 </p>
      <p>本站產險商品，由『泰安產物保險公司』提供 </p>
      <p ><a style="cursor:pointer;" href="/CareLineMotor/motorbike-mbr/viewpdf/term" target="_blank"  @click="principleAnnounce" >使用條款</a> | <a style="cursor:pointer;" href="/CareLineMotor/motorbike-mbr/viewpdf/privacy" target="_blank"  @click="privateAnnouce">隱私政策</a></p>
      <div class="footer-bottom">
        <span>© 2017 Careline. All Rights Reserved.</span>
      </div>
    </footer>
    <div class="modal-mask" v-show="visible">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <img class="logoModal" src="./assets/logo.png"/>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <pdf v-show="true" :page="page" :src="src"></pdf>
              <span @click="toNxtPDFPage">下一頁 <i class="fa fa-angle-right"></i></span>
            </slot>
          </div>

          <div class="modal-footer text-center">
            <slot name="footer">
              <button class="modal-default-button" @click="closeModal">
                關閉
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import pdf from 'vue-pdf'

var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'app',
  components: {
    pdf
  },
  data () {
    return {
      visible: false,
      page: 1,
      src: ''
    }
  },
  methods: {
    toNxtPDFPage: function () {
      if (this.page === 2) {
        this.page = 1
      } else {
        this.page++
      }
    },
    closeModal: function () {
      this.visible = false
    },
    principleAnnounce: function () {
      let pageName = this.$router.currentRoute.name
      switch (pageName) {
        case 'indexPage':
          pageName = '首頁'
          break
        case 'form':
          pageName = '車主資料頁'
          break
        case 'motorForm':
          pageName = '車籍資料頁'
          break
        case 'infoPage':
          pageName = '投保資料確認頁'
          break
        case 'thanksPage':
          pageName = '訂購成功頁'
          break
        case 'failPayment':
          pageName = '訂購失敗頁'
          break
        case 'notFound':
          pageName = '找不到頁'
          break
        case 'errorPage':
          pageName = '錯誤碼頁'
          break
        case 'qPage':
          pageName = 'QA頁'
          break
        default:
      }
      this.$gtm.trackEvent({
        category: pageName,
        action: 'click',
        label: 'User Click 使用條款',
        value: ''
      })
    },
    privateAnnouce: function () {
      let pageName = this.$router.currentRoute.name
      switch (pageName) {
        case 'indexPage':
          pageName = '首頁'
          break
        case 'form':
          pageName = '車主資料頁'
          break
        case 'motorForm':
          pageName = '車籍資料頁'
          break
        case 'infoPage':
          pageName = '投保資料確認頁'
          break
        case 'thanksPage':
          pageName = '訂購成功頁'
          break
        case 'failPayment':
          pageName = '訂購失敗頁'
          break
        case 'notFound':
          pageName = '找不到頁'
          break
        case 'errorPage':
          pageName = '錯誤碼頁'
          break
        case 'qPage':
          pageName = 'QA頁'
          break
        default:
      }
      this.$gtm.trackEvent({
        category: pageName,
        action: 'click',
        label: 'User Click 隱私政策',
        value: ''
      })
    }
  },
  computed: {
  },
  mounted () {
    this.$localStorage.remove('motorInfo')
    this.$localStorage.remove('formStore')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
