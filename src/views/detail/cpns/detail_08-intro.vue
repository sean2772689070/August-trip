<script setup>
import {toRefs} from "vue";

const props = defineProps({
  priceIntro: {
    type: Object,
    default: () => ({})
  }
})
const {title, introduction} = toRefs(props.priceIntro)
</script>

<template>
  <div class="intro">
    <div class="title">
      {{ title }}
    </div>
    <div class="text">
      {{ introduction }}
    </div>
  </div>
</template>

<style scoped lang="less">
.intro {
  padding: 16px 12px;
  border-top: 5px solid #f2f3f4;

  .title {
    font-weight: 700;
    margin-bottom: 10px;
  }

  .text {
    line-height: 1.4;
    font-size: 12px;
  }
}
</style>