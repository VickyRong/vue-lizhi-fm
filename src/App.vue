<template>
  <div id="app">
    <div class="nav_tab">
      <router-link to="/find">发现</router-link>
      <router-link to="/channel">频道</router-link>
      <router-link to="/recommend">推荐</router-link>
      <router-link to="/book">订阅</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
body{
  background: #fffcf3;
}
    .active{
      color:red;
    }
    @import 'style/common.css';
</style>
 