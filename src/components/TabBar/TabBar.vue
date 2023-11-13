<script setup>
import {ref, watch} from "vue";
import tabBarDate from "@/assets/data/tabBar";
import {getAsserURL} from "@/utils/load_assets";
import {useRoute} from "vue-router";

const route = useRoute();
const active = ref(0);
watch(route, (newValue) => {
  const index = tabBarDate.findIndex(item => item.path === newValue.path);
  if (index === -1) return;
  active.value = index;
})

</script>

<template>
  <div class="tab-bar">
    <van-tabbar
        route
        v-model="active"
        active-color="#ff9854">
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