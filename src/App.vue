<script setup>
import TabBar from "@/components/TabBar/TabBar.vue";
import {useRoute} from "vue-router";
import Loading from "@/components/Loading/Loading.vue";

const route = useRoute()


</script>

<template>
  <div class="app">
    <router-view></router-view>
    <!--    路由携带参数使得tabbar模块不显示-->
    <tab-bar v-show="!route.meta.hideTabBar"></tab-bar>
    <loading/>
  </div>
</template>

<style scoped lang="less">


</style>
