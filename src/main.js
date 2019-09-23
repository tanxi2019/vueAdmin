import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App'
import router from './router'
import axios from 'axios' // 全局配置
import apiConfig from './api/api.config.js'

axios.defaults.baseURL=apiConfig.baseURL;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
