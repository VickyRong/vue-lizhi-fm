<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./slider1.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./slider2.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./slider3.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./slider4.jpg">
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from '@/../static/swiper-3.4.2.min.js'
 require('@/../static/swiper-3.4.2.min.css')
export default {
  mounted () {
     var mySwiper = new Swiper('.swiper-container', {
       direction: 'horizontal',
       loop: true,
       autoplay : 2000,
       pagination: '.swiper-pagination'
     })
     console.log(mySwiper)
   }
}
</script>

<style scoped>
  img{width:100%;}

</style>
