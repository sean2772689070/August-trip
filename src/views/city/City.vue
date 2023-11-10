<script setup>

import {ref} from "vue";
import {useRouter} from "vue-router";
import {getCityAll} from "@/service";

const router = useRouter();
// 搜索框功能
const searchValue = ref("");
const cancelClick = () => {
  router.back();
}
// tab切换
const tabActive = ref(0);
// 请求城市数据
getCityAll().then(res => {
  console.log(res);
})
</script>

<template>
  <div class="city">
    <van-search v-model="searchValue"
                placeholder="城市/区域/位置"
                shape="round"
                show-action
                @cancel="cancelClick"/>
    <van-tabs v-model:active="tabActive" color="#ff9854" line-height="2">
      <van-tab title="国内·港澳台"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>
  </div>
</template>

<style scoped lang="less">
.city {
  //--van-tabs-line-height:30px;
}
</style>