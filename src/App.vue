<!--
 * @Author: your name
 * @Date: 2019-12-25 16:55:17
 * @LastEditTime: 2019-12-26 10:44:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /hellovue/src/App.vue
 -->
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
