<template>
  <div class="indexPage">
    <nav id="defaultIndex" class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="logo" @click="toGoBackIndex"><a href="#"><img id="logoImg" style="max-width:180px;" src="../assets/logoStand.png"/></a></div>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" class="navbar-collapse collapse" v-bind:class="{secondPageNav: alterChangeNav}">
          <ul class="nav navbar-nav navbar-right">
            <li><p @click="toGoQandAPage">Q&A <span class="sr-only">(current)</span></p></li>
            <li><p><i class="fa fa-facebook-square" aria-hidden="true"></i></p></li>
            <li><p><i class="fa fa-phone" aria-hidden="true"></i>免費客服專線 0800-234-088 (周一~周五 09:30~18:00)</p></li>
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
          <img class="first-slide" src="../assets/banner.jpg" onerror="this.style.display='none'" alt="First slide">
          <div class="titleDivH4" v-show="false"><h2>CareLine</h2></div>
          <div class="textDiv"></div>
          <div class="titleButton"><button id="likeToInsured">我要投保<i class="fa fa-chevron-circle-down" aria-hidden="true"></i></button></div>
          <div class="container">
            <div class="carousel-caption">
            </div>
          </div>
        </div>
      </div>
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
                    <div class="title"><div class="yearTitle"><p>{{ product.year }}年</p></div><span>{{ product.title }}</span></div>
                    <div class="priceDiv">
                      <p class="priceNormal">NT$ {{ product.price }}<p/>
                      <p class="priceDiscount">{{ product.discountPrice }}<div v-show="isActive" class="moneySign"></div><p/>
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
              <button class="btn btn-lg" :class="{isActiveButton:isActive}" @click="whichProductToShow">{{productText}}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'indexPage',
  data () {
    return {
      selectedProduct: {},
      isActive: true,
      productText: '1年方案',
      visible: false,
      products: [
          {title: '機車強制險', year: 2, price: 735, discountPrice: 'NT$' + 848, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'green', cc: '1-50cc', textColor: 'white'},
          {title: '機車強制險', year: 2, price: 1200, discountPrice: 'NT$' + 1316, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'white', cc: '51-250cc', textColor: 'black'},
          {title: '機車強制險', year: 2, price: 1306, discountPrice: 'NT$' + 1422, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'yellow', cc: '250-550cc', textColor: 'black'},
          { title: '機車強制險', year: 2, price: 1306, discountPrice: 'NT$' + 1422, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'red', cc: '550cc+', textColor: 'white' }
      ]
    }
  },
  methods: {
    toGoBackIndex: function () {
      this.$router.push('/')
    },
    toGoQandAPage: function () {
      window.open('index.html#/faqPage', '_blank')
    },
    whichProductToShow: function () {
      if (this.isActive) {
        this.productText = '2年方案'
        this.oneYearProduct()
      } else {
        this.productText = '1年方案'
        this.twoYearProduct()
      }
    },
    oneYearProduct: function (event) {
      this.isActive = false
      this.products = [
        { title: '機車強制險', year: 1, price: 424, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'green', cc: '1-50cc', textColor: 'white' },
        { title: '機車強制險', year: 1, price: 658, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'white', cc: '51-250cc', textColor: 'black' },
        { title: '機車強制險', year: 1, price: 711, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'yellow', cc: '250-550cc', textColor: 'black' },
        { title: '機車強制險', year: 1, price: 711, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'red', cc: '550cc+', textColor: 'white' }
      ]
    },
    twoYearProduct: function (event) {
      this.isActive = true
      this.products = [
        { title: '機車強制險', year: 2, price: 735, discountPrice: 'NT$' + 848, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'green', cc: '1-50cc', textColor: 'white' },
        { title: '機車強制險', year: 2, price: 1200, discountPrice: 'NT$' + 1316, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'white', cc: '51-250cc', textColor: 'black' },
        { title: '機車強制險', year: 2, price: 1306, discountPrice: 'NT$' + 1422, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'yellow', cc: '250-550cc', textColor: 'black' },
        { title: '機車強制險', year: 2, price: 1306, discountPrice: 'NT$' + 1422, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'red', cc: '550cc+', textColor: 'white' }
      ]
    },
    productClicked: function (product, index) {
      this.$parent.secondPageNav = true
      switch (index) {
        case 0:
          this.selectedProduct['productCC'] = 'green'
          break
        case 1:
          this.selectedProduct['productCC'] = 'white'
          break
        case 2:
          this.selectedProduct['productCC'] = 'yellow'
          break
        case 3:
          this.selectedProduct['productCC'] = 'red'
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
      this.$router.push('/piform')
    }
  },
  computed: {
    alterChangeNav: function () {
      return this.$parent.secondPageNav
    },
    returnMsg: function () {
      console.log(this.$parent)
      return this.$parent.returnMsg
    },
    pdfContentToShow: function () {
      return this.$parent.pdfContentToShow
    }
  },
  mounted: function () {
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
  .productAhref:hover {
    color: transparent;
  }
  .logoModal {
    margin: 0px;
    height: 40px;
    widht: auto;
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

</style>
