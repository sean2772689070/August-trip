<script setup>

import {computed, ref} from "vue";

import {useRouter} from "vue-router";

import {storeToRefs} from "pinia";
import useCityStore from "@/stores/modules/city";
import useHomeStore from "@/stores/modules/home";

import {formatMonthDay, getDiffDays} from "@/utils/format_date";
import useMainStore from "@/stores/modules/main";

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
const mainStore = useMainStore();
const {startDate, endDate} = storeToRefs(mainStore);
const startDateStr = computed(() => formatMonthDay(startDate.value));
const endDateStr = computed(() => formatMonthDay(endDate.value));
const stayCount = ref(getDiffDays(startDate.value, endDate.value));

const showCalendar = ref(false);
const onConfirm = (val) => {
  const selectStartDate = val[0];
  const selectEndDate = val[1];
  startDate.value = selectStartDate;
  endDate.value = selectEndDate;
  stayCount.value = getDiffDays(selectStartDate, selectEndDate);
  showCalendar.value = false;
}

// 热门地区
const homeStore = useHomeStore();
const {hotSuggests} = storeToRefs(homeStore);
//开始搜索
const searchBtnClick = () => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName,
    }
  })
}
</script>

<template>
  <div class="search-box">
    <!--  位置信息-->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
    <!--  日期范围-->
    <div class="section date-range" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
      </div>
      <div class="stay">
        共{{ stayCount }}晚
      </div>
      <div class="end">
        <div class="date" style="width: 74px;">
          <span class="tip">离店</span>
          <span class="time">{{ endDateStr }}</span>
        </div>
      </div>
    </div>
    <van-calendar
        v-model:show="showCalendar"
        type="range"
        color="#ff9854"
        :round="false"
        :show-confirm="false"
        @confirm="onConfirm"/>
    <!--    价格/人数选择-->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!--    关键字-->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>
    <!--    热门建议-->
    <div class="section hot-suggest">
      <template v-for="(item,index) in hotSuggests" :key="index">
        <div
            class="item"
            :style="{color: item.tagText.color, background: item.tagText.background.color}"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <!--    搜索按钮-->
    <div class="section search-btn">
      <van-button @click="searchBtnClick" class="item" color="var(--theme-linear-gradient)" block round>
        开始搜索
      </van-button>
    </div>

  </div>
</template>

<style scoped lang="less">
.search-box {
  --van-calendar-popup-height: 100vh;
}
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
  color: #999;
  height: 44px;
  .date {
    display: flex;
    flex-direction: column;
  }

  .stay {
    display: flex;
    justify-content: center;
  }

  .tip {
    font-size: 12px;
  }

  .time {
    font-size: 14px;
    color: #777;
  }
}

//价格/人数
.price-counter {
  .end {
    width: 74px;
  }
}

//热门建议
.hot-suggest {
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10px 0;
  height: auto;
  .item {
    padding: 4px 5px;
    margin: 5px 10px;
    font-size: 12px;
    border-radius: 14px;
    line-height: 1;
  }
}

//搜索按钮
.search-btn {
  .item {
    font-size: 20px;
  }
}
</style>