/*
 * @Author: your name
 * @Date: 2019-12-25 16:55:17
 * @LastEditTime : 2019-12-26 11:02:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hellovue/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './variables.scss'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
