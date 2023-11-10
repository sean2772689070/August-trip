<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import useCityStore from "@/stores/modules/city";
import {storeToRefs} from "pinia";
import CityGroup from "@/views/city/cpns/CityGroup.vue";

const router = useRouter();
// 搜索框功能
const searchValue = ref("");
const cancelClick = () => {
  router.back();
}
// tab切换
const tabActive = ref('');
// 请求城市数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const {allCities} = storeToRefs(cityStore);
</script>

<template>
  <div class="city">
    <!--    顶部搜索栏-->
    <div class="top">
      <van-search v-model="searchValue"
                  placeholder="城市/区域/位置"
                  shape="round"
                  show-action
                  @cancel="cancelClick"/>
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="2">
        <template v-for="(value,key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <!--    内容模块-->
    <div class="content">
      <template v-for="(value,key) in allCities" :key="key">
        <city-group v-show="tabActive === key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>