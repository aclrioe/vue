<template>
  <div class="home">
    <div class="home_title">
      box
    </div>
    <banner></banner>
    <navBox></navBox>
    <news></news>
  </div>
</template>

<script>
  import banner from './banner.vue';
  import navBox from './nav-box.vue';
  import news from './news.vue';
  export default {
    name: 'home',
    components: {
      banner,
      navBox,
      news
    },
    created(){
      this.$store.dispatch("inHome");
    }
  }
</script>
<style lang="less">
  .home{
    width: 100%;
    height: auto;
    .home_title{
      height: 30px;
      background: #00a6c6;
      font-size: 1.5em;
      line-height: 2em;
      text-indent: 1em;
    }
  }
</style>
