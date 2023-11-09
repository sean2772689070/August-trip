<script setup>
import {ref} from "vue";
import tabBarDate from "@/assets/data/tabBar";
import {getAsserURL} from "@/utils/load_assets";

const active = ref(0);
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="active" active-color="#ff9854">
      <template v-for="(item,index) in tabBarDate" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon="props">
            <img :src="props.active?getAsserURL(item.imageActive):getAsserURL(item.image)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style scoped lang="less">
.tab-bar {
  img {
    height: 26px;
  }
}
</style>