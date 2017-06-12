<template>
  <div class="motorFormPage">

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
          <img src="../assets/route992.png" class="img-responsive" alt="">
        </div>
    </div>

    <div class="container customerForm animated slideInLeft">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
            <strong>車籍資料</strong>
          </div>
          <div class="col-sm-7" style="margin-top:0px;"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
            <div class="exampleCarLicense" v-for="( value, index ) in showExamples" :class="'licenseExample' + (index + 1)" v-show="value.isShow"></div>
          </div>
          <div class="col-sm-7">
            <div class="col-sm-12 text-left">
              <span style="">選擇車廠:</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7" style="margin-top:0px;">
            <div class="col-sm-6">
              <button class="form-control" type="radio"  name="getMotoFactory"  v-bind:class="{errorShow:motoMadeFactoryInValid, buttonActive:MCButton}" @click="getMotoFactory('MC')">光陽/KYMCO</button>
            </div>
            <div class="col-sm-6" id="carBrandCol">
              <button class="form-control" type="radio" name="getMotoFactory" v-bind:class="{errorShow:motoMadeFactoryInValid, buttonActive:MAButton}" @click="getMotoFactory('MA')">三陽/SYM</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12" id="carBrandCol">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <div class="col-sm-6" style="margin-top:5px;">
              <button style="margin-bottom:0px;" type="radio" name="getMotoFactory" class="form-control" v-bind:class="{errorShow:motoMadeFactoryInValid, buttonActive:MBButton}" @click="getMotoFactory('MB')">山葉/YAMAHA</button>
            </div>
            <div class="col-sm-6" style="margin-top:5px;">
              <button class="form-control" type="radio" v-bind:class="{errorShow:motoMadeFactoryInValid, buttonActive:OtherButton}" @click="getMotoFactory('other')">其他廠牌</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
            <div class="col-sm-5">
            </div>
            <div class="col-sm-7">
            <span class="errorMessage" style="padding-left: 15px;" v-show="motoMadeFactoryInValid">{{ motoMadeFactoryErrorMsg }}</span>
            <div class="iconErrorMessageBack" style="top:-12px; left:12px;" v-show="motoMadeFactoryInValid"></div>
          </div>
        </div>
      </div>

      <div class="row">
          <div class="col-sm-12" v-show="showOther">
            <div class="col-sm-5">
            </div>
            <div class="col-sm-7">
              <div class="col-sm-12">
                <div class="selectWrapper">
                  <select @change="checkHpOrCc" v-model="motoMadeFactoryItem" v-bind:class="{errorShow:motoMadeFactoryInValid}" class="form-control">
                    <option v-for="item in brandList" :value="item">{{item.name}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
       </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <div class="col-sm-3">
              <span class="formTitleSpan" style="margin-left: 0px;">請輸入車牌前三碼:</span>
              <input type="text" v-bind:="tofocusSecondPlate" @change="toValidatePlate" @click="validateMotoFac"
                     v-bind:class="{errorShow:isPlateError}"  style="text-transform:uppercase"  maxlength="3"
                      v-model="plateNumberFirstArea"  :disabled="newPlate"  placeholder="請輸入車牌"  class="form-control"
                      name="motoPlateEng">
            </div>
            <div class="col-sm-1">
              <div class="carPlateLineText"></div>
            </div>
            <div class="col-sm-4">
              <span class="formTitleSpan" style="margin-left: 0px;">請輸入車牌後三碼或四碼:</span>
                    <input type="text" id="secondAreaInput" @change="toValidatePlate" v-bind:class="{errorShow:isPlateError}" :click="validateMotoFac"
                            style="text-transform:uppercase"  maxlength="4"  v-model="plateNumberSecondArea"
                            :disabled="newPlate || !plateNumberFirstArea"  placeholder=""  class="form-control"
                            name="motoplateNum">     
            </div>
            <div class="col-sm-4">       
              <button type="button" id="newPlateFocus" v-bind:class="{errorShow:isPlateError, 'buttonActive':newPlate}" @click="isNewPlate"  class="form-control newPlateFocus">新車無牌照
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <span class="errorMessage motoErrorMsg" style="padding-right:999px;" v-show="isPlateError">{{ isPlateErrorMsg }}</span>
            <div class="iconErrorMessageBack motoErrorIcon" style="" v-show="isPlateError"></div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <div class="col-sm-12">
              <span class="formTitleSpan" style="margin-left: 0px;">請輸入引擊號碼:</span>
              <input type="text" @click="showEngineNumbExamples" maxlength="20" @change="validateEngineNumb" v-model="engineNum" v-bind:class="{errorShow:engineNumInValid}" name="engineNum" class="form-control" placeholder="引擊號碼/車身號碼(擇一)">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <span class="errorMessage motoErrorMsg" style="" v-show="engineNumInValid">{{ engineNumErrorMsg }}</span>
            <div class="iconErrorMessageBack motoErrorIcon" style="" v-show="engineNumInValid"></div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <div class="col-sm-3 text-left">
              <div style="padding-top:20px;">
                <span class="formTitleSpan" style="margin-left: 0px;">排氣量:</span>
                <span class="hideInLowScreen birthSpan">排氣量</span>
              </div>
            </div>
            <div class="col-sm-7">
                  <input class="form-control" maxlength="4" @click="toShowAirCCExample" @change="comparePlateWithEnterCC" v-bind:class="{errorShow:ProductCCInValid}" v-model="userEnteredProdcutCC" placeholder="請輸入行照上的排氣量">
              <span class="ccSpan">{{ ccTextOrHp }}</span>
            </div>
            <div class="col-sm-2">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
            <div class="col-sm-5">
            </div>
            <div class="col-sm-7">
              <div class="iconErrorMessageBack motoErrorIcon" style="" v-show="ProductCCInValid"></div>
              <span class="errorMessage motoErrorMsg" style="padding-right:999px;" v-show="ProductCCInValid">請輸入行照上的排氣量。</span>
            </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">

          </div>
          <div class="col-sm-7">
            <div class="col-sm-3 text-left">
              <div style="padding-top:20px;">
                <span class="formTitleSpan" style="margin-left: 0px;margin-bottom: -10px;">發照日期:</span>
                <span class="hideInLowScreen birthSpan">發照日期</span>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="selectWrapper" v-bind:class="{errorShow:releasePlateYearInValid}">
                <select @change="validateReleasePlateYear($event)" v-model="releasePlateYearDate" class="form-control" @click="toShowIssuedDateExample">
                <option value="">民國年</option>
                <option v-for="yearItem in taiwanYearRelease">民國{{yearItem}}年</option>
                </select>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="selectWrapper" v-bind:class="{errorShow: releasePLateMonthInValid}">
                 <select @change="validateReleasePlateMonth" @click="toShowIssuedDateExample" v-model="releasePLateMonthDate" class="form-control" :disabled="releasePlateYearDate == ''" name="releasePLateMonthDate" id="releasePLateMonthDate">
                  <option value="">月</option>
                  <option v-for=" month in taiwanMonth ">{{ month }}月</option>
                 </select>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="selectWrapper" v-bind:class="{errorShow:releasePlateDayInValid}">
                 <select @change="validateReleasePlateDay" @click="toShowIssuedDateExample" v-model="releasePlateDayDate" class="form-control" :disabled="releasePLateMonthDate == ''" name="releasePlateDayDate" id="releasePlateDayDate">
                   <option value="">日</option>
                   <option v-for=" day in thisMonthDays ">{{ day }}日</option>
                 </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <div class="iconErrorMessageBack motoErrorIcon" style="" v-show="releasePlateYearInValid || releasePLateMonthInValid || releasePlateDayInValid"></div>
          <span class="errorMessage motoErrorMsg" style="padding-right:999px;" v-show="releasePlateYearInValid || releasePLateMonthInValid || releasePlateDayInValid">{{ releasePlateYearErrorMsg }}{{ releasePLateMonthErrorMsg }}{{ releasePlateDayErrorMsg }} 請選擇發照日期。</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <div class="col-sm-3 text-left">
              <div style="padding-top:22px;">
                <span class="formTitleSpan" style="margin-left: 0px;margin-bottom:-10px;">出廠年月:</span>
                <span class="hideInLowScreen birthSpan">出廠年月</span>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="selectWrapper" v-bind:class="{errorShow:releaseMotoYearInValid}">
                <select @click="toShowMotoDateExample" class="form-control" @change="validateMotoYear" v-model="releaseMotoYearDate" name="releaseMotoYearDate" id="releaseMotoYearDate">
                  <option value="">西元年</option>
                  <option v-for=" year in westernYear ">{{ year }}年</option>
                </select>
              </div>
            </div>
            <div class="col-sm-3">
               <div class="selectWrapper" v-bind:class="{errorShow:releaseMotoMonthInValid}">
                 <select @click="toShowMotoDateExample" class="form-control" @change="validateMotoMonth" :disabled="releaseMotoYearDate == ''" v-model="releaseMotoMonthDate" name="releaseMotoMonthDate" id="releaseMotoMonthDate">
                  <option value="">月</option>
                  <option v-for=" month in taiwanMonth ">{{ month }}月</option>
                 </select>
                </div>
            </div>
            <div class="col-sm-3">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <div class="iconErrorMessageBack motoErrorIcon" style="" v-show="releaseMotoYearInValid || releaseMotoMonthInValid"></div>
            <span class="errorMessage motoErrorMsg" style="padding-right:999px;" v-show="releaseMotoYearInValid || releaseMotoMonthInValid">{{ releaseMotoYearErrorMsg }}{{ releaseMotoMonthErrorMsg }} 請選擇出廠年月。</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <div class="col-sm-4 text-left">
              <div style="padding-top:30px">
                <span class="formTitleSpan" style="margin-left: 0px;">保險開始日:</span>
                <span class="hideInLowScreen birthSpan" style="padding-left:14px;">保險開始日</span>
              </div>
            </div>
          <div class="col-sm-8">
            <datepicker v-model="executionDay" v-on:opened="toCheckAndValiMotorDate" v-bind:class="{errorShow: executionDayInValid}" v-on:input="validateExecution" @change="" language="zh" format="yyyy-MM-dd" input-class="form-control customerDate" placeholder="請選擇保險開始日" :highlighted="state.highlighted" :disabled="state.disabled"></datepicker>
          </div>
        </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <span class="errorMessage motoErrorMsg" style="" v-show="executionDayInValid">{{ executionDayErrorMsg }}</span>
            <div class="iconErrorMessageBack motoErrorIcon" style="" v-show="executionDayInValid"></div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <div class="col-sm-12 text-right">
              <p style="margin-top: 0px;" class="timePeriod">*中午12點生效  <b> {{ productYear }} 年期 </b></p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <div class="col-sm-12">
              <button class="btn btn-primary NextButton" @click="readyToCheckInfo">下一步</button>
              <router-link to="piForm">
                <button class="btn btn-danger NextButton">上一步</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--modal-->
    <div class="modal-mask" v-show="visibleError">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <img class="logo" src="../assets/logo.png"/>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <p>{{errorMsgOfFailSent}}</p>
              <ul style="padding-left:0px;" v-for="text in backMsg">
                <p>{{text}}</p>
              </ul>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button"  @click="closeModal">
                關閉
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>

    <!--cc-modal-->
    <div class="modal-mask" v-show="ccModalShow">
      <div class="modal-wrapper">
        <div class="modal-container" style="width:400px;">

          <div class="modal-header" style="padding: 15px 18%;">
            <slot name="header">
              <img class="logo" src="../assets/logo.png"/>
            </slot>
          </div>

          <div class="modal-body" style="width:300px;">
            <slot name="body">
              <span v-show="!ccSpanShow">{{ccErrorMsg}}<p :style="{color:colorTxtOfcc}">{{ccChosen}}</p></span>
              <!--<ul style="padding-left:0px; display:none; list-style-type:none;"><li v-show="green" style="color:green">綠牌(馬力應低於或等於5)</li><li v-show="white">白牌(馬力應高於5或低於等於40)</li><li v-show="yellow" style="color:orangered;">黃、紅牌(馬力應高於40)</li><li v-show="red" style="color:red;">黃、紅牌(馬力應高於40)</li></ul>-->
              <span v-show="ccSpanShow">{{ccErrorMsg}}<p :style="{color:colorTxtOfcc}">{{ccChosen}}</p></span>
              <!--<ul v-show="ccSpanShow" style="padding-left:0px; display:none; list-style-type:none;"><li v-show="green" style="color:green">綠牌(0cc-50cc)</li><li v-show="white">白牌(50cc-250cc)</li><li v-show="yellow" style="color:orangered;">黃牌(250cc-550cc)</li><li v-show="red" style="color:red;">紅牌(550cc以上)</li></ul>-->
            </slot>
          </div>

          <div class="modal-footer text-center" style="text-align: center;">
            <slot name="footer">
              <button class="modal-default-button backToSelect pull-left" style="width:40%;" @click="toGoBackIndex">
                重選車牌方案
              </button>
              <button class="modal-default-button pull-right" style="width:40%;" @click="ccModalShow = false">
                重新輸入排氣量
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
import Datepicker from 'vuejs-datepicker'

var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'motorFormPage',
  components: { Datepicker },
  data () {
    return {
      green: false,
      white: false,
      yellow: false,
      red: false,
      ccSpanShow: false,
      backMsg: '',
      ccModalShow: false,
      visibleError: false,
      ccChosen: '',
      ccErrorMsg: '',
      errorMsgOfFailSent: '',
      colorTxtOfcc: '',
      MAButton: false,
      MBButton: false,
      MCButton: true,
      OtherButton: false,
      isButtonActive: false,
      carLicenseExample: false,
      engineNumExample: false,
      airProduceExample: false,
      issuedDayExample: false,
      motoFacDateExample: false,
      brandExample: true,
      showOther: false,
      ProductCCInValid: false,
      motoMadeFactoryInValid: false,
      topDisplay: '',
      motoMadeFactoryItem: {id: 0, code: '', name: '請選擇您的廠牌', topDisplay: false},
      motoBrand: '光陽',
      motoMadeFactory: 'MC',
      motoMadeFactoryErrorMsg: '',
      isPlateErrorMsg: '',
      plateNumberFirstArea: '',
      plateNumberSecondArea: '',
      executionDay: '',
      ccTextOrHp: 'cc',
      textForEndModalCC: '',
      newPlate: false,
      isPlateError: false,
      engineNumInValid: false,
      engineNumErrorMsg: '',
      userEnteredProdcutCC: '',
      releasePlateYearDate: '',
      releasePlateYearInValid: false,
      releasePlateYearErrorMsg: '',
      releasePLateMonthDate: '',
      releasePLateMonthErrorMsg: '',
      releasePLateMonthInValid: false,
      releasePlateDayErrorMsg: '',
      releasePlateDayDate: '',
      releasePlateDayInValid: false,
      releaseMotoYearDate: '',
      releaseMotoYearInValid: false,
      releaseMotoMonthDate: '',
      releaseMotoMonthInValid: false,
      releaseMotoYearErrorMsg: '',
      releaseMotoMonthErrorMsg: '',
      engineNum: '',
      executionDayErrorMsg: '',
      executionDayInValid: false,
      state: {
        highlighted: {
          to: new Date(2016, 0, 5), // Highlight all dates up to specific date
          from: new Date(2016, 0, 26), // Highlight all dates after specific date
          days: [6, 0], // Highlight Saturday's and Sunday's
          dates: [ // Highlight an array of dates
            new Date(2017, 7, 16),
            new Date(2017, 7, 17),
            new Date(2017, 7, 18)
          ]
        },
        disabled: {
          to: new Date(),
          from: new Date(new Date().getTime() + 60 * 24 * 60 * 60 * 1000), // Disable all dates after specific date
          dates: [ // Disable an array of dates
          ]
        }
      }
    }
  },
  methods: {
    toCheckAndValiMotorDate: function () {
      this.validateMotoYear()
      this.validateMotoMonth()
    },
    toGoBackIndex: function () {
      this.ccModalShow = false
      this.$router.push('/')
    },
    toGoQandAPage: function () {
      window.open('index.html#/faqPage', '_blank')
    },
    closeModal: function () {
      this.visible = false
      this.visibleError = false
      this.ccModalShow = false
    },
    readyToCheckInfo: function () {
      if (this.toValidatePlate() &&
        this.validateMotoFac() &&
        this.validateEngineNumb() &&
        this.validateReleasePlateYear() &&
        this.validateReleasePlateMonth() &&
        this.validateReleasePlateDay() &&
        this.validateMotoYear() &&
        this.validateMotoMonth() &&
        this.validateExecution()) {
        if (!this.comparePlateWithEnterCC()) {
        } else {
          var motocycleInfo = {}
          motocycleInfo['productIDFromBackend'] = this.$parent.dataId
          motocycleInfo['motocycleFactory'] = this.motoMadeFactory
          motocycleInfo['plateEng'] = this.plateNumberFirstArea
          motocycleInfo['plateNum'] = this.plateNumberSecondArea
          motocycleInfo['isNewPlate'] = this.newPlate
          motocycleInfo['motoBrand'] = this.motoBrand === '' ? this.motoMadeFactoryItem.name : this.motoBrand
          var rY = parseInt(this.releasePlateYearDate.slice(2, 5)) + 1911
          var rM = parseInt(this.releasePLateMonthDate.slice(0, 1))
          var rD = parseInt(this.releasePlateDayDate.slice(0, 1))
          var mY = parseInt(this.releaseMotoYearDate.slice(0, 4))
          var mM = parseInt(this.releaseMotoMonthDate.slice(0, 1))

          motocycleInfo['motoBrandItem'] = this.motoMadeFactoryItem
          motocycleInfo['releasePlateYear'] = rY
          motocycleInfo['releasePlateMonth'] = rM
          motocycleInfo['releasePlateDay'] = rD
          motocycleInfo['motoReleasePlateDateForCheck'] = this.releasePlateYearDate + ',' + this.releasePLateMonthDate + ',' + this.releasePlateDayDate
          motocycleInfo['motoFactoryDateForCheck'] = this.releaseMotoYearDate + ',' + this.releaseMotoMonthDate
          motocycleInfo['motoFactoryMadeYear'] = mY
          motocycleInfo['motoFactoryMadeMonth'] = mM
          motocycleInfo['engineNumber'] = this.engineNum
          motocycleInfo['executionDay'] = this.formatDate(this.executionDay)
          motocycleInfo['motocycleCC'] = this.userEnteredProdcutCC
          this.$parent.$parent.userEnteredProdcutCC = this.userEnteredProdcutCC
          this.$parent.motocycleInfo = motocycleInfo
          try {
            this.$localStorage.set('motorInfo', JSON.stringify(motocycleInfo))
          } catch (e) {
          }
          var postObj = {}
          postObj['motocycleInfo'] = motocycleInfo

          axios({
            url: '/CareLineMotor/motorbike-mbr/journey/saveMotorbikeInfo',
            method: 'post',
            params: {
              data: JSON.stringify(postObj)
            }
          }).then(response => {
            if (response.data.isEx === true) {
              this.errorMsgOfFailSent = ''
              this.backMsg = response.data.msgs
              this.visibleError = true
              return false
            } else {
              this.$router.push('/confirmPage')
            }
          }, response => {
            // error callback
          })
        }
      } else {
        console.log('1', this.toValidatePlate())
        console.log('2', this.validateMotoFac())
        console.log('3', this.comparePlateWithEnterCC())
        console.log('4', this.validateEngineNumb())
        console.log('5', this.validateEngineNumb())
        console.log('6', this.validateReleasePlateYear())
        console.log('7', this.validateReleasePlateMonth())
        console.log('8', this.validateReleasePlateDay())
        console.log('9', this.validateMotoYear())
        console.log('10', this.validateMotoMonth())
        console.log('11', this.validateExecution())

        this.toValidatePlate()
        this.validateMotoFac()
        this.comparePlateWithEnterCC()
        this.validateEngineNumb()
        this.validateReleasePlateYear()
        this.validateReleasePlateMonth()
        this.validateReleasePlateDay()
        this.validateMotoYear()
        this.validateMotoMonth()
        this.validateExecution()
      }
    },
    formatDate: function (date) {
      let d = new Date(date)
      let month = '' + (d.getMonth() + 1)
      let day = '' + d.getDate()
      let year = d.getFullYear()

      if (month.length < 2) month = '0' + month
      if (day.length < 2) day = '0' + day

      return [year, month, day].join('-')
    },
    showEngineNumbExamples: function () {
      this.toValidatePlate()
      this.engineNumExample = true
      this.airProduceExample = false
      this.issuedDayExample = false
      this.motoFacDateExample = false
      this.carLicenseExample = false
      this.brandExample = false
    },
    toShowAirCCExample: function () {
      this.validateEngineNumb()
      this.engineNumExample = false
      this.airProduceExample = true
      this.issuedDayExample = false
      this.motoFacDateExample = false
      this.carLicenseExample = false
      this.brandExample = false
    },
    toShowIssuedDateExample: function () {
      this.comparePlateWithEnterCC()
      this.engineNumExample = false
      this.airProduceExample = false
      this.issuedDayExample = true
      this.motoFacDateExample = false
      this.carLicenseExample = false
      this.brandExample = false
    },
    toShowMotoDateExample: function () {
      this.validateReleasePlateYear()
      this.validateReleasePlateMonth()
      this.validateReleasePlateDay()
      this.engineNumExample = false
      this.airProduceExample = false
      this.issuedDayExample = false
      this.motoFacDateExample = true
      this.carLicenseExample = false
      this.brandExample = false
    },
    toShowBrandExample: function () {
      this.brandExample = true
    },
    isNewPlate: function () {
      if (!this.newPlate) {
        this.plateNumberFirstArea = ''
        this.plateNumberSecondArea = ''
        this.isPlateError = false
        this.isPlateErrorMsg = ''
        this.newPlate = true
      } else {
        this.newPlate = false
      }
    },
    getMotoFactory: function (value) {
      this.engineNumExample = false
      this.airProduceExample = false
      this.issuedDayExample = false
      this.motoFacDateExample = false
      this.carLicenseExample = false
      this.brandExample = true
      if (value !== 'other') {
        switch (value) {
          case 'MA':
            this.motoMadeFactory = 'MC'
            this.motoBrand = '光陽'
            this.motoMadeFactoryInValid = false
            this.MAButton = true
            this.MBButton = false
            this.MCButton = false
            this.ccTextOrHp = 'cc'
            this.OtherButton = false
            break
          case 'MB':
            this.motoMadeFactory = 'MB'
            this.motoBrand = '山葉'
            this.motoMadeFactoryInValid = false
            this.MBButton = true
            this.MAButton = false
            this.MCButton = false
            this.ccTextOrHp = 'cc'
            this.OtherButton = false
            break
          case 'MC':
            this.motoMadeFactory = 'MC'
            this.motoBrand = '三陽'
            this.motoMadeFactoryInValid = false
            this.MCButton = true
            this.MBButton = false
            this.MAButton = false
            this.ccTextOrHp = 'cc'
            this.OtherButton = false
            break
          default:
        }
        this.showOther = false
      } else {
        this.OtherButton = true
        this.motoMadeFactoryItem = {id: 0, code: '', name: '請選擇您的廠牌', topDisplay: false}
        this.motoMadeFactory = this.motoMadeFactoryItem.code
        this.MAButton = false
        this.MBButton = false
        this.MCButton = false
        this.showOther = true
      }
    },
    validateMotoFac: function () {
      this.engineNumExample = false
      this.airProduceExample = false
      this.issuedDayExample = false
      this.motoFacDateExample = false
      this.carLicenseExample = true
      this.brandExample = false
      if (this.motoMadeFactory === '') {
        this.motoMadeFactoryErrorMsg = '找不到廠牌嗎？請選擇其他。'
        this.motoMadeFactoryInValid = true
        return false
      } else {
        this.motoMadeFactoryInValid = false
        return true
      }
    },
    toValidatePlate: function () {
      if (this.plateNumberFirstArea === '' && this.plateNumberSecondArea === '' && this.newPlate === false) {
        this.isPlateError = true
        this.isPlateErrorMsg = '請輸入車牌號碼。'
        return false
      } else if ((this.plateNumberFirstArea === '' && this.plateNumberSecondArea === '') && this.newPlate === true) {
        this.isPlateError = false
        return true
      } else if ((this.plateNumberFirstArea <= 2 || this.plateNumberSecondArea.length <= 2) && this.newPlate === false) {
        this.isPlateError = true
        this.isPlateErrorMsg = '請輸入車牌號碼。'
        return false
      } else if ((this.plateNumberFirstArea >= 2 || this.plateNumberSecondArea.length >= 3) && this.newPlate === false) {
        this.isPlateError = false
        return true
      }
    },
    validateEngineNumb: function () {
      if (this.engineNum === '' || !(/^[A-Za-z0-9-]*$/.test(this.engineNum)) || isNaN(this.engineNum.charAt(0))) {
        console.log('1', this.engineNum.charAt(0))
        console.log('2', isNaN(this.engineNum.charAt(0)))
        console.log('3', typeof this.engineNum.charAt(0))
        this.engineNumInValid = true
        this.engineNumErrorMsg = '請輸入正確引擎/車身號碼。'
        return false
      } else if (this.engineNum.length >= 21) {
        this.engineNumInValid = true
        this.engineNumErrorMsg = '引擎/車身號碼最多只能是20個字數。'
        return false
      } else {
        this.engineNumInValid = false
        return true
      }
    },
    validateReleasePlateYear: function (event) {
      if (event) {
        this.releasePlateYearDate = event.target.value
      }
      if (this.releasePlateYearDate === '') {
        this.releasePlateYearInValid = true
        this.releasePlateYearErrorMsg = ''
        return false
      } else {
        this.releasePlateYearInValid = false
        return true
      }
    },
    validateReleasePlateMonth: function () {
      if (this.releasePLateMonthDate === '') {
        this.releasePLateMonthInValid = true
        this.releasePLateMonthErrorMsg = ''
        return false
      } else {
        this.releasePLateMonthInValid = false
        return true
      }
    },
    validateReleasePlateDay: function () {
      if (this.releasePlateDayDate === '') {
        this.releasePlateDayInValid = true
        this.releasePlateDayErrorMsg = ''
        return false
      } else {
        this.releasePlateDayInValid = false
        return true
      }
    },
    validateMotoYear: function () {
      if (this.releaseMotoYearDate === '') {
        this.releaseMotoYearInValid = true
        this.releaseMotoYearErrorMsg = ''
        return false
      } else {
        this.releaseMotoYearInValid = false
        return true
      }
    },
    validateMotoMonth: function () {
      if (this.releaseMotoMonthDate === '') {
        this.releaseMotoMonthInValid = true
        this.releaseMotoMonthErrorMsg = ''
        return false
      } else {
        this.releaseMotoMonthInValid = false
        return true
      }
    },
    validateExecution: function () {
      if (this.executionDay === '') {
        this.executionDayInValid = true
        this.executionDayErrorMsg = '請選擇強制險生效日。'
        return false
      } else {
        this.executionDayInValid = false
        this.executionDayErrorMsg = ''
        return true
      }
    },
    comparePlateWithEnterCC: function () {
      var selectProductCC = this.$parent.userSelectedProduct['productCC']
      if (this.motoMadeFactory === 'MH') {
        this.$parent.$parent.isMH = true
        this.ccSpanShow = false
        if (selectProductCC === 'green') {
          if (this.userEnteredProdcutCC <= 5) {
            this.ProductCCInValid = false
            return true
          } else {
            $('select').blur()
            this.ccModalShow = true
            this.red = true
            this.yellow = true
            this.white = true
            this.green = false
            this.colorTxtOfcc = 'green'
            this.ccChosen = '綠牌(馬力應低於或等於5)'
            this.ccErrorMsg = '您輸入的' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '(' + this.userEnteredProdcutCC + ')與您挑選的車牌方案' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '不符，提醒您，您剛剛所選擇的車牌方案是'
            this.ProductCCInValid = true
            return false
          }
        } else if (selectProductCC === 'white') {
          if (this.userEnteredProdcutCC > 5 && this.userEnteredProdcutCC <= 40) {
            this.ProductCCInValid = false
            return true
          } else {
            $('select').blur()
            this.red = true
            this.yellow = true
            this.white = false
            this.green = true
            this.ccModalShow = true
            this.colorTxtOfcc = 'black'
            this.ccChosen = '白牌(馬力應高於5或低於等於40)'
            this.ccErrorMsg = '您輸入的' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '(' + this.userEnteredProdcutCC + ')與您挑選的車牌方案' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '不符，提醒您，您剛剛所選擇的車牌方案是'
            this.ProductCCInValid = true
            return false
          }
        } else if (selectProductCC === 'yellow') {
          if (this.userEnteredProdcutCC >= 40) {
            this.ProductCCInValid = false
            return true
          } else {
            $('select').blur()
            this.ccModalShow = true
            this.red = true
            this.yellow = false
            this.white = true
            this.green = true
            this.colorTxtOfcc = 'rgb(224, 88, 0)'
            this.ccChosen = '黃、紅牌(馬力應高於40)'
            this.ccErrorMsg = '您輸入的' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '(' + this.userEnteredProdcutCC + ')與您挑選的車牌方案' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '不符，提醒您，您剛剛所選擇的車牌方案是'
            this.ProductCCInValid = true
            return false
          }
        } else if (selectProductCC === 'red') {
          if (this.userEnteredProdcutCC >= 40) {
            this.ProductCCInValid = false
            return true
          } else {
            $('select').blur()
            this.red = false
            this.yellow = true
            this.white = true
            this.green = true
            this.ccModalShow = true
            this.colorTxtOfcc = 'red'
            this.ccChosen = '黃、紅牌(馬力應高於40)'
            this.ccErrorMsg = '您輸入的' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '(' + this.userEnteredProdcutCC + ')與您挑選的車牌方案' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '不符，提醒您，您剛剛所選擇的車牌方案是'
            this.ProductCCInValid = true
            return false
          }
        } else {
          this.ProductCCInValid = true
          return false
        }
      } else {
        if (selectProductCC === 'green') {
          if (this.userEnteredProdcutCC <= 50) {
            this.ProductCCInValid = false
            return true
          } else {
            $('select').blur()
            this.ccSpanShow = true
            this.ccModalShow = true
            this.colorTxtOfcc = 'green'
            this.red = true
            this.yellow = true
            this.white = true
            this.green = false
            this.ccChosen = '綠牌(1-50cc)'
            this.ccErrorMsg = '您輸入的' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '(' + this.userEnteredProdcutCC + ')與您挑選的車牌方案' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '不符，提醒您，您剛剛所選擇的車牌方案是'
            this.ProductCCInValid = true
            return false
          }
        } else if (selectProductCC === 'white') {
          if (this.userEnteredProdcutCC > 50 && this.userEnteredProdcutCC <= 250) {
            this.ProductCCInValid = false
            return true
          } else {
            $('select').blur()
            this.ccModalShow = true
            this.ccSpanShow = true
            this.red = true
            this.yellow = true
            this.white = false
            this.green = true
            this.colorTxtOfcc = 'black'
            this.ccChosen = '白牌(51-250cc)'
            this.ccErrorMsg = '您輸入的' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '(' + this.userEnteredProdcutCC + ')與您挑選的車牌方案' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '不符，提醒您，您剛剛所選擇的車牌方案是'
            this.ProductCCInValid = true
            return false
          }
        } else if (selectProductCC === 'yellow') {
          if (this.userEnteredProdcutCC > 250 && this.userEnteredProdcutCC <= 550) {
            this.ProductCCInValid = false
            return true
          } else {
            $('select').blur()
            this.ccModalShow = true
            this.ccSpanShow = true
            this.red = true
            this.yellow = false
            this.white = true
            this.green = true
            this.colorTxtOfcc = 'rgb(224, 88, 0)'
            this.ccChosen = '黃牌(251-550)'
            this.ccErrorMsg = '您輸入的' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '(' + this.userEnteredProdcutCC + ')與您挑選的車牌方案' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '不符，提醒您，您剛剛所選擇的車牌方案是'
            this.ProductCCInValid = true
            return false
          }
        } else if (selectProductCC === 'red') {
          if (this.userEnteredProdcutCC > 550) {
            this.ProductCCInValid = false
            return true
          } else {
            $('select').blur()
            this.ccModalShow = true
            this.ccSpanShow = true
            this.red = false
            this.yellow = true
            this.white = true
            this.green = true
            this.colorTxtOfcc = 'red'
            this.ccChosen = '紅牌(551cc+)'
            this.ccErrorMsg = '您輸入的' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '(' + this.userEnteredProdcutCC + ')與您挑選的車牌方案' + (this.$parent.$parent.isMH === true ? '馬力數' : '排氣量') + '不符，提醒您，您剛剛所選擇的車牌方案是'
            this.ProductCCInValid = true
            return false
          }
        } else {
          this.ProductCCInValid = true
          return false
        }
      }
    },
    checkHpOrCc: function () {
      this.motoMadeFactory = this.motoMadeFactoryItem.code
      this.motoBrand = this.motoMadeFactoryItem.name
      if (this.motoMadeFactoryItem.code === 'MH') {
        this.ccTextOrHp = 'hp'
        this.$parent.$parent.isMH = true
      } else {
        this.ccTextOrHp = 'cc'
        this.$parent.$parent.isMH = false
      }
    }
  },
  computed: {
    productCC: function () {
      if (this.executionDay) {
        this.validateExecution()
      }
      return this.$parent.userSelectedProduct['productCC']
    },
    productYear: function () {
      return this.$parent.userSelectedProduct['year']
    },
    taiwanYearRelease: function () {
      var date = new Date()
      let limitAge
      limitAge = date.getFullYear() - 1911
      var returnReleaseValue = []
      returnReleaseValue.push(limitAge)
      for (var e = 1; e < 30; e++) {
        limitAge--
        returnReleaseValue.push(limitAge)
      }
      return returnReleaseValue
    },
    taiwanMonth: function () {
      var months = []
      for (var i = 1; i <= 12; i++) {
        months.push(i)
      }
      return months
    },
    getCurrentMonthDay: function () {
      if (this.releasePLateMonthDate !== '') {
        var m = parseInt(this.releasePLateMonthDate.slice(0, 2))
        var y = parseInt(this.releasePlateYearDate.slice(2, 6)) + 1911
        switch (m) {
          case 1: case 3: case 5: case 7: case 8:case 10: case 12:
            return 32
          case 2:
            if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
              return 30
            }
            return 29
          default:
            return 31
        }
      }
    },
    thisMonthDays: function () {
      var returnVal = []
      for (var i = 1; i < this.getCurrentMonthDay; i++) {
        returnVal.push(i)
      }
      return returnVal
    },
    westernYear: function () {
      var date = new Date()
      var currentWesternYear = {}
      currentWesternYear = date.getFullYear()
      let returnVal = []
      returnVal.push(currentWesternYear)
      for (var i = 1; i < 30; i++) {
        currentWesternYear--
        returnVal.push(currentWesternYear)
      }

      return returnVal
    },
    brandList: function () {
      console.log(this.$parent.$parent.BrandList)
      let returnArrayBrand = []
      for (let i = 0; i < this.$parent.$parent.BrandList.length; i++) {
        if (!this.$parent.$parent.BrandList[i].topDisplay) {
          returnArrayBrand.push(this.$parent.$parent.BrandList[i])
        }
      }
      var arrayForRe = returnArrayBrand.sort(function (a, b) {
        return a.id - b.id
      })
      console.log(arrayForRe)
      return arrayForRe
    },
    showExamples: function () {
      var examples = [{'isShow': this.airProduceExample}, {'isShow': this.carLicenseExample}, {'isShow': this.engineNumExample}, {'isShow': this.motoFacDateExample}, {'isShow': this.issuedDayExample}, {'isShow': this.brandExample}]
      return examples
    },
    tofocusSecondPlate: function () {
      if (this.plateNumberFirstArea.length > 2 || this.plateNumberSecondArea.length > 1) {
        var Lenglish = /^[A-Za-z0-9]*$/
        if (Lenglish.test(this.plateNumberFirstArea) === false || Lenglish.test(this.plateNumberSecondArea) === false) {
          this.isPlateError = true
          this.isPlateErrorMsg = '請輸入正確車牌號碼。'
        } else {
          this.isPlateError = false
          if (this.plateNumberFirstArea.length > 2) {
            $('#secondAreaInput').focus()
            if (this.plateNumberSecondArea.length > 2) {
              this.toValidatePlate()
            }
          } else {
          }
        }
      }
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    var motorInfo = JSON.parse(this.$localStorage.get('motorInfo'))
    console.log(motorInfo)
    if (motorInfo) {
      this.motoMadeFactory = motorInfo['motocycleFactory']
      console.log(motorInfo['motoBrandItem'])
      if (motorInfo['motocycleFactory']) {
        switch (this.motoMadeFactory) {
          case 'MA':
            this.getMotoFactory('MA')
            break
          case 'MB':
            this.getMotoFactory('MB')
            break
          case 'MC':
            this.getMotoFactory('MC')
            break
          default:
            this.OtherButton = true
            this.motoMadeFactoryItem = motorInfo['motoBrandItem']
            this.motoMadeFactory = this.motoMadeFactoryItem.code
            this.checkHpOrCc()
            this.MAButton = false
            this.MBButton = false
            this.MCButton = false
            this.showOther = true
        }
      }
      this.plateNumberFirstArea = motorInfo['plateEng']
      this.plateNumberSecondArea = motorInfo['plateNum']
      this.newPlate = motorInfo['isNewPlate']
      var motoRPD = motorInfo['motoReleasePlateDateForCheck'].split(',')
      for (let i = 0; i < motoRPD.length; i++) {
        if (i === 0) {
          this.releasePlateYearDate = motoRPD[i]
        } else if (i === 1) {
          this.releasePLateMonthDate = motoRPD[i]
        } else {
          this.releasePlateDayDate = motoRPD[i]
        }
      }
      var motoFDC = motorInfo['motoFactoryDateForCheck'].split(',')
      for (let i = 0; i < motoFDC.length; i++) {
        if (i === 0) {
          this.releaseMotoYearDate = motoFDC[i]
        } else if (i === 1) {
          this.releaseMotoMonthDate = motoFDC[i]
        }
      }
      this.newPlate = motorInfo['isNewPlate']
      this.engineNum = motorInfo['engineNumber']
      this.executionDay = motorInfo['executionDay']
      this.userEnteredProdcutCC = motorInfo['motocycleCC']
    } else {
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
  .customerForm {
    margin-bottom: 173px;
    margin-top: 5%;
  }
  .processImg {
    padding-top: 18px;
  }

  span.errorMessage.motoErrorMsg {
    padding-right: 540px;
  }
  .customerForm .birthSpan {
  }

  .modal-default-button.backToSelect {
    background-color: white;
    color: #777;
    border: 1px solid #777;
  }
  @media screen and (max-width: 414px) {
    #carBrandCol {
      margin-top: -15px;
    }
  }
  .modal-body span p {
    display: inline-block;
  }
  @media screen and (max-width:800px) {
    #carBrandCol {
      margin-top: -15px;
    }
  }
</style>
