'
' @Author: your name
' @Date: 2019-12-25 16:55:17
' @LastEditTime: 2019-12-25 17:49:56
' @LastEditors: your name
' @Description: In User Settings Edit
' @FilePath: /hellovue/src/components/HelloWorld.vue
'
<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <h2 class="test">{{txt}}</h2>
    <h2 class="test2">{{txt}}</h2>
    <h2 class="test3">{{txt}}</h2>
    <h2 class="test4">{{txt}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
   return({ 
     txt:'i am test',
     })
  },
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


<style lang="less" scoped>
  @font-color:green;
  .test {
    color: @font-color;
  }
</style>
<style lang="scss" >
  @import "../assets/css/test.scss";//必须加;，否则报错
</style>
<style lang="less">
  @import "../assets/css/txt.less";//必须加;，否则报错
</style>



