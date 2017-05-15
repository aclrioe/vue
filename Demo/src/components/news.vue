<template>
  <div class="news">
    <div class="news-item" v-for="item in data">
      <div class="news-title">{{item.title}}</div>
      <img
        v-if="item.imageurls[0]"
        :src="item.imageurls[0].url"
        class="news-img"
      >
      <div class="news-time">{{item.pubDate}}</div>
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
          that.data = res.data.showapi_res_body.pagebean.contentlist.splice(1,3)
        }
      ),function (error) {

      }
    },
    data(){
      return{
        apiUrl:"http://route.showapi.com/109-35",
        showapi_sign:"1688d17e4c41492daaef9e12d36dcd0d",
        showapi_appid:"35517",
        data:""
      }
    }
  }
</script>
<style lang="less">
  .news{
    display: block;
    padding: 10px 20px;
    .news.title{
      font-size: 16px;
      display: inline-block;
    }
    .news-img{
      width: 100px;
      height: 100px;
      margin: 5px 0;
    }
    .news-time{
      font-size: 12px;
      color: #999;
    }
  }
</style>
