<template>
  <div id="app">
    <router-view>
    </router-view>
    <footer class="text-center">
      <p>本站網路投保服務，由『凱萊保險代理人股份有限公司』提供 </p>
      <p>本站產險商品，由『泰安產物保險公司』提供 </p>
      <p ><a style="cursor:pointer;"  @click="principleAnnounce" >使用條款</a> | <a style="cursor:pointer;" @click="privateAnnouce">隱私政策</a></p>
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
      window.open('/CareLineMotor/motorbike-mbr/viewpdf/term', '_blank', 'fullscreen=yes')
//      this.src = './static/assets/pdf/term.pdf'
//      this.page = 1
//      this.visible = true
    },
    privateAnnouce: function () {
      window.open('/CareLineMotor/motorbike-mbr/viewpdf/privacy', '_blank', 'fullscreen=yes')
//      this.src = './static/assets/pdf/privacy.pdf'
//      this.visible = true
//      this.page = 1
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
