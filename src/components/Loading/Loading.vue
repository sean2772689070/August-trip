<script setup>

import useMainStore from "@/stores/modules/main";
import {storeToRefs} from "pinia";

const mainStore = useMainStore();
const {isLoading} = storeToRefs(mainStore);
const loadingClick = () => {
  isLoading.value = false;
}
</script>

<template>
  <div class="loading" @click="loadingClick" v-if="isLoading">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<style scoped lang="less">
.loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .2);

  .bg {
    width: 104px;
    height: 104px;
    background: url("@/assets/img/home/loading-bg.png") 0 0 / 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
    }
  }
}
</style>