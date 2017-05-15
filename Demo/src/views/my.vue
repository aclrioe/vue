<template>
  <div class="my">
    <div class="my-head">
      <div class="my-logo"></div>
      <span class="my-name">aclrioe</span>
    </div>
    <div class="my-detail">
      github:  <a href="https://github.com/aclrioe">https://github.com/aclrioe</a>
      <br><br>
      email:aclrioe@gmail.com
      <br> <br>
      QQ:741419855
      <br> <br>
    </div>
  </div>
</template>

<script>
  export default {
    name:"my",
    created(){
      this.$store.dispatch("inMy")
    }
  }
</script>
<style>
  .my-head{
    width: 100%;
    height: 180px;
    background: url("../assets/images/bg1.png") no-repeat;
    position: relative;
    .my-logo{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: url("../assets/images/logo.jpg") no-repeat;
      position: absolute;
      top: 60px;
      left: 0px;
      margin: 0px auto;
    }
    .my-name{
      display: block;
      position: absolute;
      bottom: 10px;
      margin: 0px auto;
      text-align: center;

    }
  }
  .my-detail{
    margin: 10px;
  }
</style>
