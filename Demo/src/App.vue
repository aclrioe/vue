<template>
  <div id="app">
    <home></home>
    <foterTab></foterTab>
  </div>
</template>

<script>
  import footerTab from './components/footer.vue';
  import home from './components/home.vue';
  import store from './vuex/store';
  export default {
    name: 'app',
    store,
    components:{
      footerTab,
      home
    }
  }

</script>

<style lang="less">
  #app{
    width: 100%;
    height: 100%;
  }
</style>
