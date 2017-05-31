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

        </div>
    </div>

    <div style="margin-top:50px; min-height:720px;" class="container customerInfo animated slideInLeft">
      <div class="row">
        <div class="col-sm-12 thanksDiv">
          <div class="col-sm-12 text-center" style="margin-bottom:10px; padding-top:5%;">
            <h2>付款失敗</h2>
            <img src="../assets/failpayment.png" alt="img-responsive" style="height:150px; width:auto;">
            <h4 style="border-bottom:none;">系統似乎繁忙中，需要任何協助請撥打免費客服專線：</h4>
            <h4>0800-234-088 (週一~週五 09：30~18：00)，英國凱萊感謝您.</h4>
          </div>
          <div class="col-sm-12">
            <div class="thanksWords text-center">
              <div class="buttonProject">
                <button class="btn-lg" @click="toGoBackIndex">回到首頁</button>
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
              <object v-show="AnnounceShow" style="width: 100%; height: 400px; display: block;" data="./static/assets/pdf/term.pdf#page=2" type="application/pdf" width="100%" height="100%">
                <iframe  src="./static/assets/pdf/term.pdf" width="100%" height="100%" type="application/pdf" />
              </object>
              <object v-show="PrivacyShow" style="width: 100%; height: 400px; display: block;" data="./static/assets/pdf/privacy.pdf#page=2" type="application/pdf" width="100%" height="100%">
                <iframe src="./static/assets/pdf/privacy.pdf" width="100%" height="100%" type="application/pdf" />
              </object>
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

var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'failPayment',
  data () {
    return {
      visible: false,
      AnnounceShow: false,
      PrivacyShow: false
    }
  },
  methods: {
    toGoBackIndex: function () {
      this.$router.push('/')
    },
    toGoQandAPage: function () {
      window.open('index.html#/qPage', '_blank')
    },
    closeModal: function () {
      this.visible = false
      this.AnnounceShow = false
      this.PrivacyShow = false
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

  .modal-container {
    width: 300px;
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
</style>
