<template>
  <div class="errorPage">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="logo" @click="toGoBackIndex('logo')"><a><img id="logoImg" style="max-width:180px;" src="../../static/assets/logo.png"/></a></div>
          <button @click="showingNavBar" type="button" class="navbar-toggle collapsed" data-toggle="collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li v-show="toShowActivity"><p @click="goToActivityTwo">活動專區<span class="sr-only">活動專區<</span></p></li>
            <li><p @click="toGoQandAPage">Q&A <span class="sr-only">(current)</span></p></li>
            <li><a href="https://www.facebook.com/kaistraventure/" target="_blank"><p><i class="fa fa-facebook-square" aria-hidden="true"></i></p></a></li>
            <li><p style="cursor:default"><i class="fa fa-phone" aria-hidden="true"></i>免費客服專線 0800-234-088 (周一~周五 09:30~18:00)</p></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div><!--/.container-fluid -->
    </nav>

    <div style=" min-height:720px;" class="container customerInfo animated slideInLeft">
      <div class="row activityRow" v-for="activity in activities">
        <div class="container">
          <div class="col-sm-12">
            <img style="width: 100%;" id="activityImg" class="img-responsive" :src="activity.activityBanner" alt="">
          </div>
          <div class="col-sm-12 activity" style="text-align: left;">
            <div style="margin-bottom: 15px;">
              <div class="col-sm-12">
                <strong>活動名稱：</strong>
                <strong class="activityTitle">{{activity.activityTitle}}</strong>
              </div>
              <div class="col-sm-12">
                <strong>活動期間：</strong>
                <strong style="font-size: 16px;" class="actTime">2017年7月1日00：01起至2017年8月31日23：59止。</strong>
              </div>
              <div class="col-sm-12">
                <strong>活動獎項：</strong>
                <strong style="font-size: 16px;" class="actTime">小米電動滑板車7月份、8月份各抽一台。</strong>
              </div>
            </div>
            <div class="col-sm-12">
                <strong>活動內容：</strong>
                <ul>
                  <li>1. 活動期間於<b>英國凱萊</b>網路投保平台，完成任ㄧ保險商品投保成功，<b>(機車強制險、旅行平安險)</b>將獲得本活動抽獎資格ㄧ次。活動期間第二次完成英國凱萊任ㄧ保險商品投保成功(機車強制險、旅行平安險) 將獲得本活動抽獎資格兩次…以此類推。保險期間可不在活動期間內，核保成功後又取消保單者將喪失活動資格。</li>
                  <br/>
                  <li>2. 7月份獎項將於8/1由電腦隨機抽出，8月份獎項將於9/1由電腦隨機抽出。7月份沒有中獎的所有活動參加者，擁有的抽獎資格與次數將累進至8月份抽獎活動中。獎項恕無法選色。</li>
                </ul>
            </div>
            <div class="col-sm-12" style="">
              <a href="https://www.facebook.com/kaistraventure/videos/vb.1856981887921157/1930400740579271/?type=2&theater" target="_blank"><span style="color: #0000ff;"><strong style="font-size:18px;">點我看 七月份抽獎直播</strong></span></a>
            </div>
            <div class="col-sm-12" style="">
                <a href="https://goo.gl/Mvjhgb" target="_blank"><span style="color: #0000ff;"><strong style="font-size:18px;">點我看 獎品開箱文</strong></span></a>
            </div>
            <div class="col-sm-12" style="padding:0px;">
              <img style="width: 100%;" id="activityImgTwo" class="img-responsive" :src="activity.activityBannerTwo" alt="">
            </div>
            <div class="notification col-sm-12">
              <strong>注意事項：</strong>
              <ul>
                <li>1. 消費者須確保所有資料填寫無誤，填寫資料不實者將喪失得獎資格。</li>
                <li>2. 依中華民國所得稅法規定，當年度中獎金額超過新臺幣1,000元，獎項所得應列入當年度個人綜合所得稅申報；若獎項所得總額超過新臺幣2萬元，需先行繳納10%稅額。</li>
                <li>3. 本公司將主動以E-Mail、聯絡電話通知活動得獎人，活動得獎人需於指定回覆資料截止日前，提供真實姓名、身分證字號、地址、電話…等個人資訊以利相關領獎作業，逾期回覆或未回覆者視為棄權，本公司不遞補名額。</li>
                <li>4. 獎項使用需遵守當地政府使用規範(法律、自治條例等)，本公司不負責所有後續使用相關的法律責任。</li>
                <li>5. 本公司不負責獎項的後續保固、維修等衍生問題與責任。</li>
                <li>6. 本活動僅限台灣地區（包含金門、馬祖、澎湖）設有居住所知本國人參加。獎品寄送亦僅限前述地區。</li>
                <li>7. 如發現有足以影響活動公平性之事由，本公司有權取消其得獎資格，並不另行通知。</li>
                <li>8. 本公司將保有修改、變更或暫停活動之最終權力。</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12">
            <button class="backToIndexOfOtherPageButton text-center" @click="toGoBackIndex">回到首頁</button>
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
  name: 'activityPage',
  head: {
    title: {
      inner: '活動說明 | Care Line英國凱萊 機車強制險'
    },
    meta: [
      {name: 'description', content: '活動說明｜英國凱萊不定期舉辦相關活動，活動說明請參考說明頁或撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)'},
      {name: 'keywords', content: '投保,線上投保,Care Line,英國凱萊,Care Line英國凱萊,機車險,強制險,網路車險,活動,凱, 安安,壯壯'},
      {property: 'og:title', content: '活動說明 | Care Line英國凱萊 機車強制險'},
      {property: 'og:description', content: '活動說明｜英國凱萊不定期舉辦相關活動，活動說明請參考說明頁或撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)'},
      {property: 'og:image', content: 'https://motor.careline.com.tw/FB.jpg'},
      {property: 'og:site_name', content: '英國凱萊CareLine 網路保險'},
      {property: 'og:email', content: 'service@careline.com.tw'},
      {property: 'og:phone_number', content: '0800234088'},
      {property: 'og:url', content: 'https://www.careline.com.tw/CareLineMotor/motorbike/index.html#/activityPage'}
    ]
  },
  data () {
    return {
      activities: [
        {
          activityBannerTwo: 'static/images/activityPic/activityTwo.jpg',
          activityBanner: 'static/images/activityPic/activity.jpg',
          activityTitle: '夏之祭-投保抽電動滑板車。',
          activityTime: '',
          activityReward: '',
          activityContent: [
          ]
        }
      ]

    }
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
    },
    toGoBackIndex: function (val) {
      if (val === 'logo') {
        this.$ga.event({
          eventCategory: '活動專區頁',
          eventAction: 'click',
          eventLabel: 'User Click Logo',
          value: ''
        })
        window.open('http://www.careline.com.tw')
      } else {
        this.$ga.event({
          eventCategory: '活動專區頁',
          eventAction: 'click',
          eventLabel: 'User Click 回首頁',
          value: ''
        })
        this.$router.push('/')
      }
    },
    toGoQandAPage: function () {
      this.$ga.event({
        eventCategory: '活動專區頁',
        eventAction: 'click',
        eventLabel: 'User Click QA',
        value: ''
      })
      window.open('index.html#/faqPage', '_blank')
    }
  },
  computed: {
    toShowActivity: function () {
      if (this.$parent.$parent.isActivityShow === false) {
        this.$router.push('/')
      } else {
        return this.$parent.$parent.isActivityShow
      }
    }
  },
  mounted () {
    /* eslint-disable */
    var CE_SNAPSHOT_NAME = "活動說明 | Care Line英國凱萊 機車強制險 | 立刻投保 | Care Line英國凱萊 機車強制險"
    /* eslint-enable */
    window.scrollTo(0, 0)
    if ($(window).width() < 500) {
      $('#activityImg').attr('src', './static/images/activityPic/mobile/motorActivity.jpg')
      $('#activityImgTwo').attr('src', './static/images/activityPic/mobile/activityTwo.jpg')
    } else {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  strong {
    font-szie: 24px;
  }
  .activityTitle {
    color: #db4160;
  }
  .actTime {
    font-size: 16px;
    font-weight: normal;
  }
  .logo {
    height: 40px;
    width: auto;
  }
  .carousel {
    position: relative;
    top: -60px;
  }
  #navbar {
    height: 75px;
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
    margin-top:10px;
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

  .customerInfo, .customerInfo h4 {
    border:none;
  }

  .activityRow {
    border: 1px solid #cccccc;
    margin-top:40px;
    padding: 15px;
    margin-bottom: 40px;
  }

  .activity {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .customerInfo ul {
    padding-left: 105px;
  }
  @media screen and (max-width: 415px) {
    .thanksDiv {
      margin-top: -15px;
    }
    strong {
      font-size: 20px;
    }
    .backToIndexOfOtherPageButton {
      float: none!important;
    }
    .customerInfo ul {
      padding-left: 0px;
      padding-top: 5px;
    }
    .customerInfo ul li {
      padding-bottom: 5px;
    }
    .activity .col-sm-12 {
      padding-left: 0px;
      padding-right: 0px;
    }
    .col-sm-12 {
      padding-bottom: 5px;
    }
    .notification li {
      font-size: 14px!important;
    }
  }
  .col-sm-12 {
    padding-bottom: 10px;
  }
  .backToIndexOfOtherPageButton {
    background-color: #e84466;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    color: white;
    border-radius: 10px;
    width: 220px;
    border-color: #ccc;
    -webkit-border-radius: 36px;
    -moz-border-radius: 36px;
    border-radius: 36px;
  }
  ul li {
    font-size: 16px;
    line-height: 1.5;
  }
  .notification li {
    font-size: 14px;
  }
  .notification {
    margin-top: 15px;
  }

</style>
