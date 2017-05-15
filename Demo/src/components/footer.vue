<template>
    <div class="nav-box">
      <p class="nav-list">
        <router-link class="nav-item" to="/">
          <i :class="[home?'index1':'index']"></i>
        </router-link>
        <router-link class="nav-item" to="/my">
          <i :class="[my?'my1':'my']"></i>
        </router-link>
      </p>
    </div>
</template>

<script>
    export default {
      computed:{
        home(){
          return this.$store.state.home
        },
        my(){
          return this.$store.state.my
        }
      }
    }
</script>
<style lang="less">
  .nav-box{
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: #fff;
    border-top: 1px solid #f0f0f0;
    .nav-list{
      width: 100%;
      display: flex;
      z-index: 10;
      .nav-item{
        flex: 1;
        height: 40px;
        text-align: center;
        display: block;
        text-decoration: none;
        i{
          height: 100%;
          width:90px;
          display: block;
          margin: 0 auto;
          background-repeat: no-repeat;
          background-position-x: center;
          background-position-y: center;
          position: relative;
          top: 0px;
        }
        .index1{
          background-image: url("../assets/images/shop-1.png");
        }
        .index{
          background-image: url("../assets/images/shop.png");
        }
        .my1{
          background-image: url("../assets/images/center-1.png");
        }
        .my{
          background-image: url("../assets/images/center.png");
        }
      }
    }
  }
</style>
