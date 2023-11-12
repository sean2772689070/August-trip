<script setup>

import useHomeStore from "@/stores/modules/home";
import {storeToRefs} from "pinia";

const homeStore = useHomeStore();
const {houseList} = storeToRefs(homeStore);
console.log(houseList)
</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      列表数据
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 0 10px;
  }
}
</style>