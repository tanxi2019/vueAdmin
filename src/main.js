// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable-next-line
/* eslint-disable */
/* eslint-disable no-new */
import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App'
import router from './router'
import axios from 'axios'
import apiConfig from '../config/api.config.js'

axios.defaults.baseURL=apiConfig.baseURL;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});