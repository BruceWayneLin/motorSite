<template>
  <div class="thanksPage">

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
          <img src="../assets/route994.png" class="img-responsive" alt="">
        </div>
    </div>

    <div style="margin-top:50px;" class="container customerInfo animated slideInLeft">
      <div class="row">
        <div class="col-sm-12 thanksDiv" style="">
          <div class="col-sm-12 text-center" style="margin-bottom:10px;">
            <h2><i class="fa fa-check-circle" aria-hidden="true"></i>感謝您選擇英國凱萊，訂單編號_{{orderNumber}}_已成立</h2>
            <h3>請留意，相關資訊將會寄到您的E-mail信箱</h3>
          </div>
          <div class="col-sm-12" style="margin-top: 5px;">
            <div class="thanksWords text-center">
              <p style="color:#e84466;font-size:16px;">提醒您：此次訂購紀錄，並非正式保險契約憑證，核保完成後本公司將會郵寄保險卡及保費收據至保單登記地址。</p>
              <div class="buttonProject text-center" style="margin-top: 30px;">
                <button class="backToIndexOfOtherPageButton" @click="toGoBackIndex">回到首頁</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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

          <div class="modal-footer text-center"  style="">
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
  name: 'thanksPage',
  data () {
    return {
      errorMsgOfFailSent: '',
      orderNumber: '',
      visible: false
    }
  },
  methods: {
    toGoBackIndex: function () {
      this.$router.push('/')
    },
    closeModal: function () {
      this.visible = false
    },
    toGoQandAPage: function () {
      window.open('index.html#/faqPage', '_blank')
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
      url: '/CareLineMotor/motorbike-mbr/journey/getInfo4ThanksPage',
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
        this.orderNumber = response.data.dataId
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

  .customerInfo, .customerInfo h4, .customerInfo h3 {
    border:none;
  }
  .customerInfo h2 {
    font-weight: bold;
  }
  .thanksDiv {
    margin-top: 150px;
    min-height: 555px;
  }
  @media screen and (max-width: 414px) {
    .thanksDiv {
      margin-top: 50px;
    }
  }
</style>
