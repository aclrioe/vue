<template>
  <div class="content">
    <div class="title">
      历史上的今天
    </div>
    <div class="content-item" v-for="item in data">
      {{item.title}}
      <img class="item-img" :src="item.img">
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
          that.data = res.data.showapi_res_body.list
        }
      ),function (error) {

      }
    },
    created(){
      this.$store.dispatch("inOther");
    },
    data(){
      return{
        apiUrl:"http://route.showapi.com/119-42",
        showapi_sign:"1688d17e4c41492daaef9e12d36dcd0d",
        showapi_appid:"35517",
        data:""
      }
    }
  }
</script>
<style>
  .content-item{
    line-height: 30px;
  }
  .item-img{
    width: 100%;
    height: 150px;
    margin: 0 auto;
  }
</style>
