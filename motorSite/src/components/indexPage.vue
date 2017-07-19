<template>
  <div class="indexPage">
    <nav id="defaultIndex" class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="logo" @click="toGoBackIndex"><a><img id="logoImg" style="max-width:180px;" src="../assets/logoStand.png?v=1s"/></a></div>
          <button type="button" @click="showingNavBar" class="navbar-toggle collapsed" data-toggle="collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" class="navbar-collapse collapse" v-bind:class="{secondPageNav: alterChangeNav}">
          <ul class="nav navbar-nav navbar-right">
            <li v-show="toShowActivity"><p @click="goToActivityTwo">活動專區<span class="sr-only">活動專區<</span></p></li>
            <li><p @click="toGoQandAPage">Q&A <span class="sr-only">(current)</span></p></li>
            <li><a href="https://www.facebook.com/kaistraventure/" target="_blank"><p><i class="fa fa-facebook-square" aria-hidden="true"></i></p></a></li>
            <li><p style="cursor:default"><i class="fa fa-phone" aria-hidden="true"></i>免費客服專線 0800-234-088 (周一~周五 09:30~18:00)</p></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div><!--/.container-fluid -->
    </nav>

    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <div class="inner">
          </div>
          <div class="shadowUse">
          </div>
          <img class="first-slide" src="" alt="First slide">
          <div class="titleDivH4" v-show="false"><h2>CareLine</h2></div>
          <div class="textDiv"></div>
          <div class="titleButton"><button @click="toTriggerAnimate" id="likeToInsured">立即投保<i class="fa fa-chevron-circle-down" aria-hidden="true"></i></button></div>
          <div class="container">
            <div class="carousel-caption">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="giftInfo" v-show="toShowActivity" class="giftInfo" :class="{'moveRight': showGift}">
      <div><img style="max-width: 320px" @click="goToActivity" class="activityImg" :src="giftLink" /> </div>
      <div @click="toShowTagAnimate('initAdOpen')" class="tag shine"><img class="giftImg" src="static/assets/gift.png" alt=""></i></div>
    </div>

    <section id="myProducts" class="productSection animated" v-bind:class="{fadeInUp: isActive, fadeInDown: !isActive,}">
      <div class="row">
        <div class="col-sm-12 text-center">
          <h4 class="selectProduct" style="font-weight:bold;">選擇您的車牌顏色</h4>
        </div>
      </div>
      <div id="productContainerDiv" class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="products col-sm-3 text-center" v-for="(product, key) in products">
              <div class="productContentDiv animated" :class="'pic' + product.color">
                  <div class="plateColor" @click="productClicked(product, key)" :style="{ backgroundColor: product.color, height: '90px', color: product.textColor }"><span>{{ product.cc }}</span></div>
                  <div class="cardPlateImg"></div>
                  <div class="productContent">
                    <div class="title" :class="{'OneYearTitle': !isActive}"><div class="yearTitle"><p>{{ product.year }}年</p></div><span>{{ product.title }}<div class="priceDiscount">{{ product.discountPrice }}</div></span></div>
                    <div class="priceDiv">
                      <p class="priceNormal">NT$ {{ product.price }}<p/>
                    </div>
                  </div>
              </div>
              <div class="hoverDiv" @click="productClicked(product, key)"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 buttonProject">
            <div class="col-sm-12 text-center">
              <button class="btn btn-lg" :class="{isActiveButton:changeButton}" @click="whichProductToShow">{{productText}}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="hidden" style="display:none;">
      {{toInit}}
      {{toOpenAd}}
    </div>
  </div>
</template>
<script>
var $ = require('jquery')
window.jQuery = $
window.$ = $
import fbAna from '../assets/js/analytic'
import Vue from 'vue'
let counTime = 0
Vue.use(fbAna)
export default {
  name: 'indexPage',
  data () {
    return {
      selectedProduct: {},
      isActive: true,
      giftLink: 'static/assets/activityGiftTwo.jpg',
      productText: '',
      visible: false,
      showGift: false,
      changeButton: true,
      initActivityInfoBlockOpen: '',
      products: [
//          {title: '機車強制險', year: 2, price: 735, discountPrice: 'NT$' + 848, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'green', cc: '1-50cc', textColor: 'white'},
//          {title: '機車強制險', year: 2, price: 1200, discountPrice: 'NT$' + 1316, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'white', cc: '51-250cc', textColor: 'black'},
//          {title: '機車強制險', year: 2, price: 1306, discountPrice: 'NT$' + 1422, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'yellow', cc: '251-549cc', textColor: 'black'},
//          {title: '機車強制險', year: 2, price: 1306, discountPrice: 'NT$' + 1422, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'red', cc: '550cc+', textColor: 'white'}
      ]
    }
  },
  head: {
    title: {
      inner: '立即投保| Care Line英國凱萊機車強制險'
    },
    meta: [
      {name: 'description', content: '投保機車強制險，就送 150 元全家禮物卡! | Care Line英國凱萊 網路機車強制險'},
      {name: 'keywords', content: '投保機車強制險，就送 150 元全家禮物卡! | Care Line英國凱萊 網路機車強制險'},
      {property: 'og:title', content: 'Care Line英國凱萊 網路機車強制險'},
      {property: 'og:description', content: '投保機車強制險，就送 150 元全家禮物卡! | Care Line英國凱萊 網路機車強制險'},
      {property: 'og:image', content: 'https://motor.careline.com.tw/FB.jpg'},
      {property: 'og:site_name', content: '英國凱萊CareLine 網路保險'},
      {property: 'og:email', content: 'service@careline.com.tw'},
      {property: 'og:phone_number', content: '0800234088'},
      {property: 'og:url', content: 'https://motor.careline.com.tw'}
    ],
    script: [
      {type: 'text/javascript', src: '', async: true, body: true}
    ]
  },
  methods: {
    showingNavBar: function () {
      $('#navbar').css({
        'height': '300px'
      })
      $('#navbar').toggle()
    },
    goToActivityTwo: function () {
      window.open('index.html#/activityPage', '_blank')
      this.$ga.event({
        eventCategory: '首頁',
        eventAction: 'click',
        eventLabel: 'User Click Menu上的活動專區',
        value: ''
      })
    },
    goToActivity: function () {
      this.$router.push('/activityPage')
      this.$ga.event({
        eventCategory: '首頁',
        eventAction: 'click',
        eventLabel: 'User Click 左上的禮物圖進入活動專區',
        value: ''
      })
    },
    // gta functions
    toTriggerAnimate: function () {
      if ($(window).width() < 500) {
        $('html, body').animate({
          scrollTop: $('#myProducts').offset().top - 183
        }, 500)
      } else {
        $('html, body').animate({
          scrollTop: $('#myProducts').offset().top - 200
        }, 500)
      }
      this.$ga.event({
        eventCategory: '首頁',
        eventAction: 'click',
        eventLabel: 'User Click 立保',
        value: ''
      })
    },
    toShowTagAnimate: function (val) {
      if (this.toOpenAd || val === 'initAdOpen') {
        this.showGift = !this.showGift
      }
    },
    toGoBackIndex: function () {
      this.$ga.event({
        eventCategory: '首頁',
        eventAction: 'click',
        eventLabel: 'User Click 首頁的Logo',
        value: ''
      })
      window.open('http://www.careline.com.tw')
    },
    toGoQandAPage: function () {
      this.$ga.event({
        eventCategory: 'QA',
        eventAction: 'click',
        eventLabel: 'User Click QA',
        value: ''
      })
      window.open('index.html#/faqPage', '_blank')
    },
    whichProductToShow: function () {
      this.changeButton = !this.changeButton
      if (this.isActive) {
        this.$ga.event({
          eventCategory: '首頁',
          eventAction: 'click',
          eventLabel: 'User Click 1年方案',
          value: ''
        })
        this.productText = '2年方案'
        this.oneYearProduct()
      } else {
        this.$ga.event({
          eventCategory: '首頁',
          eventAction: 'click',
          eventLabel: 'User Click 2年方案',
          value: ''
        })
        this.productText = '1年方案'
        this.twoYearProduct()
      }
    },
    oneYearProduct: function (event) {
      this.isActive = false
      this.products = [
        { title: '機車強制險', year: 1, price: 424, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'green', cc: '1-50cc', textColor: 'white' },
        { title: '機車強制險', year: 1, price: 658, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'white', cc: '51-250cc', textColor: 'black' },
        { title: '機車強制險', year: 1, price: 711, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'yellow', cc: '251-549cc', textColor: 'black' },
        { title: '機車強制險', year: 1, price: 711, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'red', cc: '550cc+', textColor: 'white' }
      ]
    },
    twoYearProduct: function (event) {
      this.isActive = true
      this.products = [
        { title: '機車強制險', year: 2, price: 735, discountPrice: 'NT$' + 848, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'green', cc: '1-50cc', textColor: 'white' },
        { title: '機車強制險', year: 2, price: 1200, discountPrice: 'NT$' + 1316, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'white', cc: '51-250cc', textColor: 'black' },
        { title: '機車強制險', year: 2, price: 1306, discountPrice: 'NT$' + 1422, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'yellow', cc: '251-549cc', textColor: 'black' },
        { title: '機車強制險', year: 2, price: 1306, discountPrice: 'NT$' + 1422, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'red', cc: '550cc+', textColor: 'white' }
      ]
    },
    productClicked: function (product, index) {
      this.$parent.secondPageNav = true
      switch (index) {
        case 0:
          this.selectedProduct['productCC'] = 'green'
          this.$ga.event({
            eventCategory: '首頁',
            eventAction: 'click',
            eventLabel: 'User Click 綠色車牌',
            value: ''
          })
          break
        case 1:
          this.selectedProduct['productCC'] = 'white'
          this.$ga.event({
            eventCategory: '首頁',
            eventAction: 'click',
            eventLabel: 'User Click 白色車牌',
            value: ''
          })
          break
        case 2:
          this.selectedProduct['productCC'] = 'yellow'
          this.$ga.event({
            eventeventCategory: '首頁',
            eventeventAction: 'click',
            eventeventLabel: 'User Click 黃色車牌',
            eventValue: ''
          })
          break
        case 3:
          this.selectedProduct['productCC'] = 'red'
          this.$ga.event({
            eventCategory: '首頁',
            eventAction: 'click',
            eventLabel: 'User Click 紅色車牌',
            value: ''
          })
          break
        default:
          this.selectedProduct['productCC'] = ''
      }
      this.selectedProduct['title'] = product.title
      this.selectedProduct['year'] = product.year
      this.selectedProduct['price'] = product.price
      this.selectedProduct['discountPrice'] = product.discountPrice
      this.selectedProduct['content'] = product.content
      this.$parent.userSelectedProduct = this.selectedProduct
      try {
        sessionStorage.setItem('sessionKey', 'true')
      } catch (e) {
      }
      this.$router.push('/piform')
    }
  },
  computed: {
    toOpenAd: function () {
      return this.$parent.$parent.initActivityInfoBlockOpen
    },
    toInit: function () {
      if (this.toOpenAd && counTime === 0) {
        counTime++
        this.toShowTagAnimate()
      }
      if (this.$parent.$parent.$data['initPackageYear'] === '1') {
        this.productText = '2年方案'
        this.oneYearProduct()
      } else {
        this.productText = '1年方案'
        this.twoYearProduct()
      }
      return this.$parent.$parent.$data['initPackageYear']
    },
    toShowActivity: function () {
      return this.$parent.$parent.isActivityShow
    },
    alterChangeNav: function () {
      return this.$parent.secondPageNav
    },
    returnMsg: function () {
      return this.$parent.returnMsg
    },
    pdfContentToShow: function () {
      return this.$parent.pdfContentToShow
    }
  },
  created: function () {
  },
  mounted: function () {
    /* eslint-disable */
    var CE_SNAPSHOT_NAME = "立即投保| Care Line英國凱萊機車強制險 | 立刻投保 | Care Line英國凱萊 機車強制險"
    /* eslint-enable */

    window.scrollTo(0, 0)
    $('#defaultIndex').css({
      'background-color': 'rgba(0, 0, 0, 0.56)'
    })
    if ($(window).width() < 500) {
      $('.first-slide').attr('src', './static/css/img/mobileBanner.jpg')
      $('.first-slide').css('min-width', '800px')
    } else {
      $('.first-slide').attr('src', './static/css/img/banner.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title.OneYearTitle {
    position: relative;
    left: 45px;
    padding-top: 50px;
    top:-30px;
  }
  .priceAnimate {
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 2px black;
  }
  .giftInfo {
    color: black;
    background-color: white;
    height: 265px;
    width: 300px;
    position: fixed;
    top: 75px;
    left: -320px;
  }
  .activityImg {
    border: 10px solid rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
  #giftInfo.giftInfo.moveRight {
    left: 0px!important;
    background-color: transparent;
  }
  .giftInfo .tag {
    background-color: rgba(232, 68, 102, 0.67);
    height: 20%;
    float: right;
    position: absolute;
    top: 37px;
    width: 72px;
    right: -91px;
  }
  .giftInfo i {
    font-size: 18px;
    float:right;
    margin-top: 15px;
    color: white;
    width: 100%;
  }
  .productAhref:hover {
    color: transparent;
  }
  .logoModal {
    margin: 0px;
    height: 40px;
    width: auto;
  }
  .carousel {
    position: relative;
    top: -60px;
  }
  #navbar {
    background-color: rgba(0, 0, 0, 0.56);
  }
  #navbar p {
    color: white;
    margin: 15px;
    font-weight: bold;
  }

  .tag img {
    height: 30px;
    width: 70%;
    position: relative;
    top: 10px;
  }

  @media screen and (max-width: 470px) {
    .hoverDiv {
      z-index: 20;
    }
  }
  @media screen and (max-width: 860px) and (min-width: 772px) {
    .plateColor {
      height: 18%!important;
      width: 95%!important;
      max-width: 180px;
    }
  }
  @media screen and (max-width: 769px) and (min-width: 767px) {
    .plateColor {
      height: 16%!important;
    }
  }

  .moveRight {
    -webkit-animation: moveRight 0.2s; /* Safari 4.0 - 8.0 */
    animation: moveRight 0.2s ;
  }

  @-webkit-keyframes moveRight {
    0% {left: -300px;}
    100% {left: 0px;}
  }

  @keyframes moveRight {
    0% {left: -300px;}
    100% {left: 0px;}
  }

  .shine {
    -webkit-animation: shine 2s infinite; /* Safari 4.0 - 8.0 */
    animation: shine 2s infinite;
  }

  .showAnimatedNumb {
    display: none;
  }

  @-webkit-keyframes shine{
    from {
      background-repeat:no-repeat;
      background-image:-webkit-linear-gradient(
        top left,
        rgba(255, 255, 255, 0.0) 0%,
        rgba(255, 255, 255, 0.0) 45%,
        rgba(255, 255, 255, 0.5) 48%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0.5) 52%,
        rgba(255, 255, 255, 0.0) 57%,
        rgba(255, 255, 255, 0.0) 100%
      );
      background-position:-250px -250px;
      background-size: 600px 600px
    }
    to {
      background-repeat:no-repeat;
      background-position:250px 250px;
    }
  }
  @keyframes shine{
    from {
      background-repeat:no-repeat;
      background-image:-webkit-linear-gradient(
        top left,
        rgba(255, 255, 255, 0.0) 0%,
        rgba(255, 255, 255, 0.0) 45%,
        rgba(255, 255, 255, 0.5) 48%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0.5) 52%,
        rgba(255, 255, 255, 0.0) 57%,
        rgba(255, 255, 255, 0.0) 100%
      );
      background-position:-250px -250px;
      background-size: 600px 600px
    }
    to {
      background-repeat:no-repeat;
      background-position:250px 250px;
    }
  }
</style>
