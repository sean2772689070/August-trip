<script setup>

import {useRouter} from "vue-router";

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
</script>

<template>
  <div class="location">
    <div class="city" @click="cityClick">广州</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </div>
  </div>
</template>

<style scoped lang="less">
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
</style>