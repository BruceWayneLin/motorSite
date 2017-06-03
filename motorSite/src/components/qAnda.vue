<template>
  <div class="qAndaPage">

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
          <img src="../assets/qa.jpg" class="img-responsive" alt="">
        </div>
    </div>

    <div style="margin-top:50px;height: 450px;" id="qaDiv" class="container customerInfo animated slideInLeft">
      <div class="row" style="padding: 30px;">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h3>車險 Q & A</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-6">
              <h4 class="text-left"><span>Q</span> 什麼是機車強制險？</h4>
              <p class="text-left">
                強制險為政府規定強制要保，
                保障範圍為車禍本車以外第三人體傷，
                如未投保無法換照、過戶，
                並依汽機車種處以罰鍰。
              </p>
            </div>
            <div class="col-sm-6">
              <h4 class="text-left"><span>Q</span> 強制險理賠範圍包含哪些呢？</h4>
              <p class="text-left">
                機車：駕駛人以外第三人體傷賠償。
                汽車：車外第三人體傷賠償。
                強制險賠付車禍事故中對方受傷的醫療相關費用上限20萬及死殘保額200萬。
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-6">
              <h4 class="text-left"><span>Q</span> 什麼是機車強制險？</h4>
              <p class="text-left">
                強制險為政府規定強制要保，
                保障範圍為車禍本車以外第三人體傷，
                如未投保無法換照、過戶，
                並依汽機車種處以罰鍰。
              </p>
            </div>
            <div class="col-sm-6">
              <h4 class="text-left"><span>Q</span> 強制險理賠範圍包含哪些呢？</h4>
              <p class="text-left">
                機車：駕駛人以外第三人體傷賠償。
                汽車：車外第三人體傷賠償。
                強制險賠付車禍事故中對方受傷的醫療相關費用上限20萬及死殘保額200萬。
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-6">
              <h4 class="text-left"><span>Q</span> 什麼是機車強制險？</h4>
              <p class="text-left">
                強制險為政府規定強制要保，
                保障範圍為車禍本車以外第三人體傷，
                如未投保無法換照、過戶，
                並依汽機車種處以罰鍰。
              </p>
            </div>
            <div class="col-sm-6">
              <h4 class="text-left"><span>Q</span> 強制險理賠範圍包含哪些呢？</h4>
              <p class="text-left">
                機車：駕駛人以外第三人體傷賠償。
                汽車：車外第三人體傷賠償。
                強制險賠付車禍事故中對方受傷的醫療相關費用上限20萬及死殘保額200萬。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="text-center">
      <p>本站網路投保服務，由『凱萊保險代理人股份有限公司』提供 </p>
      <p>本站產險商品，由『泰安產物保險公司』提供 </p>
      <p><a  @click="principleAnnounce">使用條款</a> | <a @click="privateAnnouce">隱私政策</a></p>
      <div class="footer-bottom">
        <span>© 2017 Careline. All Rights Reserved.</span>
      </div>
    </footer>

    <div class="modal-mask" v-show="visible">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <img class="logoModal" src="../assets/logo.png"/>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <object v-show="AnnounceShow" style="width: 100%; height: 400px; display: block;" data="./static/assets/pdf/term.pdf#page=2" type="application/pdf" width="100%" height="100%">
                <iframe  src="./static/assets/pdf/term.pdf" width="100%" height="100%" type="application/pdf" />
              </object>
              <object v-show="PrivacyShow" style="width: 100%; height: 400px; display: block;" data="./static/assets/pdf/privacy.pdf#page=2" type="application/pdf" width="100%" height="100%">
                <iframe src="./static/assets/pdf/privacy.pdf" width="100%" height="100%" type="application/pdf" />
              </object>
            </slot>
          </div>

          <div class="modal-footer text-center" style="padding: 0px 47%;">
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

var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'qPage',
  data () {
    return {
      AnnounceShow: false,
      PrivacyShow: false,
      visible: false
    }
  },
  methods: {
    toGoBackIndex: function () {
      window.location.href = './index.html'
    },
    toGoQandAPage: function () {
      window.open('index.html#/qPage', '_blank')
    },
    principleAnnounce: function () {
      this.visible = true
      this.AnnounceShow = true
      this.PrivacyShow = false
    },
    privateAnnouce: function () {
      this.visible = true
      this.AnnounceShow = false
      this.PrivacyShow = true
    },
    closeModal: function () {
      this.visible = false
      this.AnnounceShow = false
      this.PrivacyShow = false
    }
  },
  computed: {
  },
  mounted () {
    window.scrollTo(0, 0)
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

  /*modal css*/
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-header .logo {
    max-width: 180px;
  }

  .modal-container {
    width: 100%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-default-button {
    margin: auto 25%;
    float: right;
    background-color: #db4160;
    border: none;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    min-width: 100px;
    color: white;
  }
  /*modal css end*/

  @media screen and (max-width:500px) {
    #qaDiv {
      min-height:800px;
    }
  }
</style>
