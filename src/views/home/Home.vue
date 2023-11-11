<script setup>
import HomeNavBar from "@/views/home/cpns/HomeNavBar.vue";
import HomeSearchBox from "@/views/home/cpns/HomeSearchBox.vue";

</script>

<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box/>
  </div>
</template>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}

</style>