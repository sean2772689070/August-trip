<script setup>
import useMainStore from "@/stores/modules/main";
import {storeToRefs} from "pinia";
import {formatMonthDay} from "@/utils/format_date";
import {computed} from "vue";

const mainStore = useMainStore();
const {startDate, endDate} = storeToRefs(mainStore);
const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"));
const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"));
</script>

<template>
  <div class="search">
    <div class="select-time">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date">{{ endDateStr }}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword">
        关键字/位置/民宿
      </div>
      <div class="right">
        <img src="@/assets/img/home/搜索.png" class="icon-search" alt=""/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.search {
  display: flex;
  align-items: center;
  background-color: #F4F4F6;
  border-radius: 10px;
  height: 45px;
  padding: 0 10px;
  color: #878B8C;

  .select-time {
    padding: 0 5px;

    .item {
      display: flex;
      align-items: center;
    }

  }

  .content {
    width: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .right {
      img {
        width: 16px;
      }
    }
  }
}
</style>