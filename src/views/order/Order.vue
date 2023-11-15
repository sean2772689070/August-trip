<script setup>
import {ref} from "vue";

const a = ref(0);
const isShow = ref(false);
const btnClick = () => {
  isShow.value = true;
  setTimeout(() => {
    a.value = Math.floor(Math.random() * 56) + 1;
    isShow.value = false;
  }, 3000)
}
</script>

<template>
  <div class="order">
    <h2 style="color: red;">{{ a }}</h2>
    <van-button :loading="isShow"
                size="large"
                type="success"
                @click="btnClick"
                loading-type="spinner"
                loading-text="抽取幸运观众ing...">
      开抽
    </van-button>
  </div>
</template>

<style scoped lang="less">
.order {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h2 {
    font-size: 64px;
  }

  button {
    font-size: 32px;
  }
}
</style>