<script setup>
import TabBar from "@/components/TabBar/TabBar.vue";
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-show="!route.meta.hideTabBar"></tab-bar>
  </div>
</template>

<style scoped lang="less">

</style>
