<template>
  <div class="content">
    <div class="title">
      英汉互译
    </div>
    <div class="contentB">
      <input type="text" class="input-text" placeholder="输入英文/汉字">
      <div class="button" @click="goTrans()">
        立即翻译
      </div>
      <div class="show-content">
        <div v-for="item in content">
          {{item}}  <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){

    },
    data(){
      return{
        apiUrl:"http://route.showapi.com/32-9",
        showapi_sign:"1688d17e4c41492daaef9e12d36dcd0d",
        showapi_appid:"35517",
        data:"",
        content:"",
        text:""
      }
    },
    created(){
      this.$store.dispatch("inOther");
    },
    methods:{
      goTrans(){
        let that = this;
        this.$http.post(
          this.apiUrl,
          {showapi_sign:this.showapi_sign,showapi_appid:this.showapi_appid,q:this.text},
          {emulateJSON:true}
        ).then(
          (res) => {
            that.content = res.data.shoapi_res_body.basic.explains
          }
        ),function (error) {

        }
      }
    }
  }
</script>
<style lang="less">
  .content{
    width: 100%;
    .title{
      width: 100%;
      background: #00a6c6;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      text-align: center;
    }
    .contentB{
      text-align: center;
      .input-text{
        border: 1px solid #bfcbd9;
        border-radius: 4px;
        color: #1f2d3d;
        font-size: 12px;
        height: 26px;
        outline: 0;
        padding: 3px 10px;
        width: 80%;
        margin: 20px auto;
      }
      .button{
        display: inline-block;
        background: #20a0ff;
        color: #fff;
        height: 20px;
        font-size: 12px;
        border-radius: 4px;
        text-align: center;
        line-height: 20px;
      }
      .show-content{
        margin: 20px;
        font-size: 12px;
      }
    }
  }
</style>
