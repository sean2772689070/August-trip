<script setup>

import DetailSection from "@/components/DetailSection/DetailSection.vue";

const props = defineProps({
  notice: {
    type: Object,
    default: () => []
  }
})
</script>

<template>
  <div class="notice">
    <detail-section title="预定须知">
      <div class="inner">
        <div class="list">
          <template v-for="(item, index) in notice" :key="index">
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="content">{{ item.introduction }}</div>
            </div>
          </template>
        </div>
        <div class="message">
          查看说明
        </div>
      </div>
    </detail-section>
  </div>
</template>

<style scoped lang="less">
.inner {
  display: flex;
  font-size: 12px;

  .list {
    .item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 20px 0;

      .title {
        width: 60px;
      }
    }
  }

  .message {
    width: 60px;
    display: flex;
    justify-content: center;
  }
}
</style>