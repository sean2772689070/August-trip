<script setup>
import HomeNavBar from "@/views/home/cpns/HomeNavBar.vue";
import HomeSearchBox from "@/views/home/cpns/HomeSearchBox.vue";
import HomeCategories from "@/views/home/cpns/HomeCategories.vue";
import HomeContent from "@/views/home/cpns/HomeContent.vue";
import useHomeStore from "@/stores/modules/home";

const homeStore = useHomeStore();
homeStore.fetchHotSuggestsData();
homeStore.fetchCategoriesData();
homeStore.fetchHouseListData();

</script>

<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box/>
    <home-categories/>
    <home-content/>
  </div>
</template>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}

</style>