<template>
  <div class="formPage">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="logo" @click="toGoBackIndex"><a href="#"><img id="logoImg" style="max-width:150px;" src="../../static/assets/logo.png"/></a></div>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        {{speedPosition}}

        <div id="navbar" class="navbar-collapse collapse" v-bind:class="{secondPageNav: alterChangeNav}">
          <ul class="nav navbar-nav navbar-right">
            <li><p @click="toGoQandAPage">Q&A <span class="sr-only">(current)</span></p></li>
            <li><p><i class="fa fa-facebook-square" aria-hidden="true"></i></p></li>
            <li><p><i class="fa fa-phone" aria-hidden="true"></i>免費客服專線 0800-234-088 (周一~周五 09:30~18:00)</p></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div><!--/.container-fluid -->
    </nav>

    <div class="timeLine-wrap container">
      <div class="row">
        <div class="timeLineDiv">
          <div class="ballonFly"></div>
          <div class="eventDivs">
            <div class="eventDiv" v-for="(step, index) in steps">
              <div class="specialIcon">
                <div class="circle" v-bind:class="{circleComplete: step.stepComplete}">
                  <h3>{{ index + 1 }}</h3>
                  <div class="stepTitleDiv">{{ step.text }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="time-bar" v-show="false">
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ width: processNum + '%' }">
                <span class="sr-only"></span>
              </div>
            </div>
          </div>
          <div class="motoOwl"  v-bind:style="{position: 'relative', top: '-26px', left: speedPosition + 'px' }">
            <img style="height:100px;" src="../assets/owlMoto.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'formPage',
  data () {
    return {

    }
  },
  methods: {
    toGoBackIndex: function () {
      window.location.href = './index.html'
    },
    toGoQandAPage: function () {
      window.open('../static/qanda.html', '_blank')
    }
  },
  computed: {
    alterChangeNav: function () {
      return this.$parent.$parent.secondPageNav
    },
    speedPosition: function () {
      return this.$parent.$parent.motoSpeedPosition
    },
    processNum: function () {
      return this.$parent.$parent.processbarNu
    },
    steps: function () {
      return this.$parent.$parent.steps
    }
  },
  mounted () {
    console.log(this.$parent)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #navbar p {
    color: #777;
    margin: 15px;
    font-weight: bold;
  }

</style>
