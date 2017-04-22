<template>
  <div id="app">
    <div class="nav_tab border-1px">
      <router-link to="/find">发现</router-link>
      <router-link to="/channel">频道</router-link>
      <router-link to="/recommend">推荐</router-link>
      <router-link to="/book">订阅</router-link>
    </div>
    <div class="app-content">
      
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>
    @import 'style/common.css';
    @import 'style/mixin.css';
    @import 'style/app.css';
</style>
 