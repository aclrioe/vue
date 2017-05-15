// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.config.debug = true //开启错误提示
Vue.http.options.emulateHTTP = true
/* eslint-disable no-new */
console.log(123);
new Vue({
  el: '#app',
  router,
  components:{ App }
})

