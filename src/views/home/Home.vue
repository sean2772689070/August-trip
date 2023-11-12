<script setup>
import HomeNavBar from "@/views/home/cpns/HomeNavBar.vue";
import HomeSearchBox from "@/views/home/cpns/HomeSearchBox.vue";
import HomeCategories from "@/views/home/cpns/HomeCategories.vue";
import HomeContent from "@/views/home/cpns/HomeContent.vue";
import useHomeStore from "@/stores/modules/home";
import useScroll from "@/hooks/useScroll";
import {computed, watch} from "vue";

const homeStore = useHomeStore();
homeStore.fetchHotSuggestsData();
homeStore.fetchCategoriesData();
homeStore.fetchHouseListData();

// 监听window窗口滚动并加载更多
const {isReachBottom, scrollTop} = useScroll();
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false;
    })
  }
})

const isShowSearchBar = computed(() => {
  return scrollTop.value >= 100;
});
</script>

<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box/>
    <home-categories/>
    <h2 v-if="isShowSearchBar">jsaadsd</h2>
    <home-content/>
  </div>
</template>

<style lang="less" scoped>
.home {
  margin-bottom: 50px;
}
.banner {
  img {
    width: 100%;
  }
}

</style>