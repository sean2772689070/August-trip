<script setup>
//接收父组件数据
import {computed, toRefs} from "vue";
import {useRouter} from "vue-router";
import useCityStore from "@/stores/modules/city";

const props = defineProps({
  groupData: {
    type: Object,
    default: {}
  }
})
// 动态索引
const {groupData} = toRefs(props)
const indexList = computed(() => {
  const list = groupData.value.cities.map(item => item.group)
  return ['#', ...list];
})
// 监听城市点击
const router = useRouter();
const cityStore = useCityStore();
const cityClick = (city) => {
  cityStore.currentCity = city;
  router.back();
}
</script>

<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门"/>
      <div class="list">
        <template v-for="(hotCity,hotCityKey) in groupData.hotCities" :key="hotCityKey">
          <div class="city" @click="cityClick(hotCity)">{{ hotCity.cityName }}</div>
        </template>
      </div>
      <template v-for="(group, groupKey) in groupData.cities" :key="groupKey">
        <van-index-anchor :index="group.group"/>
        <template v-for="(city,cityKey) in group.cities" :key="cityKey">
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style scoped lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 20px 10px 10px;

  .city {
    --city-height: 28px;
    width: 70px;
    height: var(--city-height);
    border-radius: calc(var(--city-height) / 2);
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: var(--city-height);
    background-color: #fff4ec;
    margin: 6px 5px;
  }
}
</style>