<script setup>

import useHomeStore from "@/stores/modules/home";
import {storeToRefs} from "pinia";

const homeStore = useHomeStore();
const {categories} = storeToRefs(homeStore);
</script>

<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="index">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="less">
.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  align-items: center;
  padding: 0 10px;
  margin-top: 8px;

  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    width: 70px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 8px;
    }
  }
}
</style>