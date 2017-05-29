<template>
  <div class="infoPage">

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
          <img src="../assets/route993.png" class="img-responsive" alt="">
        </div>
    </div>

    <div style="margin-top:50px;" class="container customerInfo animated slideInLeft">
      <div class="container-fluid">
        <div class="row title">
          <div class="col-sm-12 text-center">
            <h3>投保資料確認</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <!--要保人資料-->
            <div class="col-sm-6">
              <div class="col-sm-12">
                <h4>要保人資料</h4>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>姓名:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{applicant.applicantLastName}} {{ applicant.applicantFistName }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>身分證字號:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ applicant.applicantPid }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>性別:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ applicant.applicantGender == 'male' ? '男' : '女' }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>出生日期:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ applicant.applicantBirthday }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>手機號碼:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ applicant.applicantMobile }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>地址:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p class="wordWrap">{{applicant.applicantCity['name']}}, {{applicant.applicantDistrict['name']}}, {{ applicant.applicantAddr }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>E-Mail信箱:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ applicant.applicantEmail }}</p>
                </div>
              </div>
            </div>
            <!--被保人資料-->
            <div class="col-sm-6">
              <div class="col-sm-12">
                <h4>被保人資料({{ insuredPP.withInsuredRelationShipItemText }})</h4>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>姓名:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ insuredPP.insuredLastName }} {{ insuredPP.insuredFirstName }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>身分證字號:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ insuredPP.insuredPid }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>性別:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ insuredPP.insuredGender == 'male' ? '男' : '女' }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>出生日期:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ insuredPP.insuredBirthdayForCheck }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>手機號碼:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ insuredPP.insuredMobile }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>地址:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p class="wordWrap">{{insuredPP.insuredCity['name']}}, {{insuredPP.insuredDistrict['name']}}, {{ insuredPP.insuredAddr }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p>E-Mail信箱:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ insuredPP.insuredEmail }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid" style="margin-top: 0px;">
        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-12">
              <h4>機車資料</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-6">
              <div class="col-sm-3"><p>車牌:</p></div>
              <div class="col-sm-9 text-left"><p>{{motoInfoPlateEng}} - {{motoInfoPlateNum}}</p></div>
            </div>
            <div class="col-sm-6">
              <div class="col-sm-3"><p>發照日期:</p></div>
              <div class="col-sm-9 text-left"><p>{{motoInfo.motoReleasePlateDateForCheck}}</p></div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-6">
              <div class="col-sm-3"><p>車子品牌:</p></div>
              <div class="col-sm-9 text-left"><p>{{motoInfo.motoBrand}}</p></div>
            </div>
            <div class="col-sm-6">
              <div class="col-sm-3"><p>出廠日期:</p></div>
              <div class="col-sm-9 text-left"><p>{{motoInfo.motoFactoryDateForCheck}}</p></div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-6">
              <div class="col-sm-3"><p>排氣量:</p></div>
              <div class="col-sm-9 text-left"><p>{{ userEnteredProdcutCC }}</p></div>
            </div>
            <div class="col-sm-6">
              <div class="col-sm-3"><p>引擊/車身號碼:</p></div>
              <div class="col-sm-9 text-left"><p>{{motoInfo.engineNumber}}</p></div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid" style="margin-top:0px;">
        <div class="row">
          <div class="col-xs-12">
            <div class="col-sm-12">
              <h4>保單資料</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-4">
              <ul>
                <li>
                  <p>保險種類</p>
                </li>
                <li>
                  <p>{{ productInfo.prodInfo['title']  }}</p>
                </li>
                <li>
                  <a href="#">保險相關條款</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4">
              <ul>
                <li>
                  <p>保險金額</p>
                </li>
                <li v-for="item in productInfo.prodInfo['content']">
                  <p>{{ item }}</p>
                </li>
              </ul>
            </div>
            <div class="col-sm-4">
              <ul>
                <li>
                  <p>保險開始日</p>
                </li>
                <li>
                  <p>{{motoInfo.executionDay}}</p>
                </li>
                <li>
                  <p>中午12點起保({{ productInfo.prodInfo['year'] }}年期)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <div class="col-sm-6 text-left" style="margin-top: 35px;">
              <strong>總保費</strong>
            </div>
            <div class="col-sm-6 text-right">
              <ul>
                <li>
                  <p style="text-decoration: line-through; display:inline-block;"> {{ productInfo.prodInfo['discountPrice'] }}</p>
                </li>
                <li>
                  <strong>NT$ {{ productInfo.prodInfo['price'] }}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid" style="margin-top: 0px;">
        <div class="row">
          <div class="col-sm-12 text-left">
            <button class="btn btn-primary NextButton" @click="toGoOnNextPay" >下一步</button>
            <button class="btn btn-danger NextButton" @click="goBack" >上一步</button>
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
  name: 'infoPage',
  data () {
    return {
      motoInfoPlateEng: '',
      motoInfoPlateNum: ''
    }
  },
  methods: {
    toGoBackIndex: function () {
      window.location.href = './index.html'
    },
    goBack: function () {
      window.location.href = './#/motorForm'
    },
    principleAnnounce: function () {
      this.visible = true
    },
    privateAnnouce: function () {
    },
    toGoOnNextPay: function () {
      sessionStorage.clear()
      var dataIdx = this.$parent.dataId
      var dataUrl = encodeURIComponent(dataIdx)
      window.location.href = 'http://210.242.7.164/motorbike-mbr/payment/goToPaymentPage?dataId=' + dataUrl
    },
    toGoQandAPage: function () {
      window.open('../static/qanda.html', '_blank')
    }
  },
  computed: {
    applicant: function () {
      return this.$parent.$parent.applicantData
    },
    insuredPP: function () {
      return this.$parent.$parent.insuredData
    },
    motoInfo: function () {
      if (this.$parent.motocycleInfo['plateNum'] !== undefined || this.$parent.motocycleInfo['plateEng'] !== undefined) {
        this.motoInfoPlateNum = this.$parent.motocycleInfo['plateNum'].toUpperCase()
        this.motoInfoPlateEng = this.$parent.motocycleInfo['plateEng'].toUpperCase()
      }
      return this.$parent.motocycleInfo
    },
    productInfo: function () {
      let returnVal = {}
      returnVal['prodInfo'] = this.$parent.userSelectedProduct
      return returnVal
    },
    userEnteredProdcutCC: function () {
      var isMH = this.$parent.isMH
      var text = this.$parent.userEnteredProdcutCC + (isMH === true ? 'hp' : 'cc')
      return text
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    if ((this.$parent.$parent.applicantData === undefined) || (this.$parent.$parent.insuredData === undefined) || (this.$parent.motocycleInfo === undefined)) {
      window.location.href = './index.html'
    }
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
