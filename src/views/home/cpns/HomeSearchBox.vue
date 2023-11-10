<script setup>

import {useRouter} from "vue-router";
import useCityStore from "@/stores/modules/city";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import {formatMonthDay} from "@/utils/format_date";

const router = useRouter();
const cityClick = () => {
  router.push("/city")
}

const positionClick = () => {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log("获取位置成功", res);
  }, (err) => {
    console.log("获取位置失败", err);
  })
};
// 获取当前城市
const cityStore = useCityStore();
const {currentCity} = storeToRefs(cityStore);
// 日期范围处理
const nowDate = new Date();
const startDate = ref(formatMonthDay(nowDate))
const newDate = nowDate.setDate(nowDate.getDate() + 1);
const endDate = ref(formatMonthDay(newDate))
</script>

<template>
  <!--  位置信息-->
  <div class="location">
    <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </div>
  </div>
  <!--  日期范围-->
  <div class="section date-range">
    <div class="start">
      <div class="date">
        <span class="tip">入住</span>
        <span class="time">{{ startDate }}</span>
      </div>
    </div>
    <div class="stay">
      共一晚
    </div>
    <div class="end">
      <div class="date" style="width: 74px;">
        <span class="tip">离店</span>
        <span class="time">{{ endDate }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
//位置信息
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      font-size: 12px;
      top: 2px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}

//日期范围
.section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .date {
    display: flex;
    flex-direction: column;
  }

  .stay {
    display: flex;
    justify-content: center;
    color: #999;
  }

  .tip {
    font-size: 12px;
    color: #999;
  }

  .time {
    font-size: 14px;
    color: #888;
  }
}
</style>