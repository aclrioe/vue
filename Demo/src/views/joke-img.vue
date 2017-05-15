<template>
  <div class="content">
    <div class="title">
      搞笑图片
    </div>
    <div class="content-img" v-for="item in data">
      <div class="img-title">
        {{item.title}}
      </div>
      <img :src="item.img">
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
          that.data = res.data.showapi_res_body.contentlist
        }
      ),function (error) {

      }
    },
    created(){
      this.$store.dispatch("inOther");
    },
    data(){
      return{
        apiUrl:"http://route.showapi.com/341-2",
        showapi_sign:"43fcba4165904aefb911d0f0488f042a",
        showapi_appid:"37993",
        data:""
      }
    }
  }
</script>
<style>
</style>
