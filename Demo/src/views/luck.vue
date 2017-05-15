<template>
  <div class="content">
    <div class="title">
      今日运气
    </div>
    <div class="content-item">
      冲煞：{{item.chongsha}}
    </div>
    <div class="content-item">
      运势：{{item.jrhh}}
    </div>
    <div class="content-item">
      宜：{{item.yi}}
    </div>
    <div class="content-item">
      星座：{{item.xingzuo}}
    </div>
    <div class="content-item">
      日：{{item.zhiri}}
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){
      let that = this;
      this.$http.post(
        this.apiUrl,
        {showapi_sign:this.showapi_sign,showapi_appid:this.showapi_appid},
        {emulateJSON:true}
      ).then(
        (res) => {
          that.data = res.data.showapi_res_body
        }
      ),function (error) {

      }
    },
    created(){
      this.$store.dispatch("inOther");
    },
    data(){
      return{
        apiUrl:"http://route.showapi.com/856-1",
        showapi_sign:"1688d17e4c41492daaef9e12d36dcd0d",
        showapi_appid:"35517",
        data:""
      }
    }
  }
</script>
<style lang="less">
  .content{
    margin: 0;
    padding: 40px 0;
    position: relative;
    font-size: 14px;
    .title{
      background: #00a6c6;
      width: 100%;
      height:40px;
      position: fixed;
      top: 0px;
      text-align: center;
      line-height: 40px;
      font-family: cursive;
    }
    .content-item{
      padding: 10px 0px;
      margin: 0 10px;
      line-height: 30px;
      border-bottom: 1px solid #cdcdcd;
    }
  }
</style>
