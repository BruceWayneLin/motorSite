<template>
  <div class="failPayment">

    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="logo" @click="toGoBackIndex"><a href="#"><img id="logoImg" style="max-width:180px;" src="../../static/assets/logo.png"/></a></div>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><p @click="toGoQandAPage">Q&A <span class="sr-only">(current)</span></p></li>
            <li><p><i class="fa fa-facebook-square" aria-hidden="true"></i></p></li>
            <li><p><i class="fa fa-phone" aria-hidden="true"></i>免費客服專線 0800-234-088 (周一~周五 09:30~18:00)</p></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div><!--/.container-fluid -->
    </nav>

    <div class="row">
        <div class="img processImg">

        </div>
    </div>

    <div style="margin-top:50px; min-height:720px;" class="container customerInfo animated slideInLeft">
      <div class="row">
        <div class="col-sm-12 thanksDiv">
          <div class="col-sm-12 text-center" style="margin-bottom:10px; padding-top:10%;">
            <h2>付款失敗</h2>
            <h3 style=" margin-bottom: 20px;border:none;">銀行系統維護中, 錯誤代碼 {{errorCode}}</h3>
            <img src="../assets/failPayment.png" alt="img-responsive" style="height:100px; width:auto;">
            <h4 style="border-bottom:none;margin-top:30px;">系統似乎繁忙中，需要任何協助請撥打免費客服專線：</h4>
            <h4>0800-234-088 (週一~週五 09：30~18：00)，英國凱萊感謝您.</h4>
          </div>
          <div class="col-sm-12">
            <div class="thanksWords text-center">
              <div class="buttonProject">
                <button class="backToIndexOfOtherPageButton" @click="toGoBackIndex">回到首頁</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="text-center">
      <p>本站網路投保服務，由『凱萊保險代理人股份有限公司』提供 </p>
      <p>本站產險商品，由『泰安產物保險公司』提供 </p>
      <p><a @click="principleAnnounce">使用條款</a> | <a @click="privateAnnouce">隱私政策</a></p>
      <div class="footer-bottom">
        <span>© 2017 Careline. All Rights Reserved.</span>
      </div>
    </footer>

    <!--pdf modal-->
    <div class="modal-mask" v-show="visible">
      <div class="modal-wrapper">
        <div class="modal-container" style="width:100%;">

          <div class="modal-header">
            <slot name="header">
              <img style="height:40px" class="logoModal" src="../assets/logo.png"/>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <ul>
                <li v-for="item in errorMsgOfFailSent">
                  {{item}}
                </li>
              </ul>
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
import axios from '../../node_modules/axios-es6/dist/axios.min.js'
var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'failPayment',
  data () {
    return {
      visible: false,
      errorMsgOfFailSent: '',
      errorCode: ''
    }
  },
  head: {
    title: {
      inner: '機車強制險付款失敗 | Care Line英國凱萊 機車強制險'
    },
    meta: [
      {name: 'description', content: '付款失敗｜金流付款失敗，還請您稍後再試，若有任何疑問，請撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)'},
      {name: 'keywords', content: '投保,線上投保,Care Line,英國凱萊,Care Line英國凱萊,機車險,強制險,網路車險,凱, 安安,壯壯'},
      {property: 'og:title', content: '機車強制險付款失敗 | Care Line英國凱萊 機車強制險'},
      {property: 'og:description', content: '付款失敗｜金流付款失敗，還請您稍後再試，若有任何疑問，請撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)'},
      {property: 'og:image', content: 'https://motor.careline.com.tw/FB.jpg'},
      {property: 'og:site_name', content: '英國凱萊CareLine 網路保險'},
      {property: 'og:email', content: 'service@careline.com.tw'},
      {property: 'og:phone_number', content: '0800234088'},
      {property: 'og:url', content: 'https://www.careline.com.tw/CareLineMotor/motorbike/failPayment'}
    ]
  },
  methods: {
    toGoBackIndex: function () {
      this.$router.push('/')
    },
    toGoQandAPage: function () {
      window.open('index.html#/faqPage', '_blank')
    },
    closeModal: function () {
      this.visible = false
    },
    toGetDataFromUrl: function (url) {
      var queryStart = url.indexOf('?') + 1
      var queryEnd = url.length + 1
      var query = url.slice(queryStart, queryEnd - 1)
      var pairs = query.replace(/\+/g, '').split('&')
      var parms = {}
      var i
      var n
      var v
      var nv
      if (query === url || query === '') return
      for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split('=', 2)
        n = decodeURIComponent(nv[0])
        v = decodeURIComponent(nv[1])
        if (!parms.hasOwnProperty(n)) parms[n] = []
        parms[n].push(nv.length === 2 ? v : null)
      }
      console.log(parms)
      return parms
    }
  },
  computed: {
  },
  mounted () {
    window.scrollTo(0, 0)
    var webUrl = window.location.href
    var tokenForOrderNumb = this.toGetDataFromUrl(webUrl)
    var dataForApi = tokenForOrderNumb.dataId[0]
    axios({
      url: '/CareLineMotor/motorbike-mbr/journey/getInfo4FailPayment',
      method: 'post',
      params: {
        dataId: dataForApi
      }
    }).then(response => {
      if (response.data.isEx === true) {
        this.errorMsgOfFailSent = response.data.msgs
        this.visible = true
        return false
      } else {
        this.errorCode = response.data.statusCode
      }
    }, response => {
      // error callback
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    height: 40px;
    widht: auto;
  }
  .carousel {
    position: relative;
    top: -60px;
  }
  #navbar {
    background-color:  white;
    height: 75px!important;
  }
  #navbar p {
    color: #777;
    margin: 15px;
    font-weight: bold;
  }
  .processImg {
    padding-top: 18px;
  }
  .customerInfo, .customerInfo h4 {
    border:none;
  }
  .customerInfo h2 {
    color: #e84466;
    font-weight: bold;
  }
</style>
