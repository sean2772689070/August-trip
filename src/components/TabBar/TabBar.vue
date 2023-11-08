<script setup>
import tabBarDate from "@/assets/data/tabBar";
import {getAsserURL} from "@/utils/load_assets";
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();
const currentIndex = ref(0)
const itemClick = (path, index) => {
  router.push(path)
  currentIndex.value = index;
}

</script>

<template>
  <div class="tab-bar">
    <template v-for="(item,index) in tabBarDate">
      <div class="tab-bar-item" :class="{active: currentIndex === index}" @click="itemClick(item.path,index)">
        <img v-if="currentIndex === index" :src="getAsserURL(item.imageActive)" alt="">
        <img v-else :src="getAsserURL(item.image)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<style scoped lang="less">
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;

  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }

    img {
      width: 36px;
    }
  }
}
</style>