<template>
  <div id="app">
    <div class="nav_tab">
      <router-link to="/find">发现</router-link>
      <router-link to="/channel">频道</router-link>
      <router-link to="/recommend">推荐</router-link>
      <router-link to="/book">订阅</router-link>
    </div>

<!--<div class="index-tabs">
    <div class="wrap"><a href="/labels" class="">分类</a><a href="/" class="active">排行榜</a><a href="https://appweb.lizhi.fm/live/list" class="">直播</a><a href="/search" class="">搜索</a></div>
</div>-->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
    @import 'style/common.css';
    @import 'style/app.css';
</style>
 