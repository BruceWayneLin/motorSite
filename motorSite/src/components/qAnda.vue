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

    <div style="margin-top:50px;height: 450px;" class="container customerInfo animated slideInLeft">
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
      <p><a href="#"  @click="principleAnnounce">使用條款</a> | <a href="#" @click="privateAnnouce">隱私政策</a></p>
      <div class="footer-bottom">
        <span>© 2017 Careline. All Rights Reserved.</span>
      </div>
    </footer>
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
    },
    privateAnnouce: function () {
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
</style>
