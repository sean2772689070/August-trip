<script setup>
import {computed} from "vue";

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
const {image, summaryText, houseName, commentScore, finalPrice} = props.itemData;
const score = computed(() => {
  return Number(commentScore)
})


</script>

<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="image.url" alt="">
      </div>
      <div class="infos">
        <div class="summary">{{ summaryText }}</div>
        <div class="name">{{ houseName }}</div>
        <div class="price">
          <van-rate :model-value="score"
                    readonly allow-half
                    size="15"
                    gutter="0"
                    color="#ffffff"/>
          <div class="new">{{ "￥" + finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.house-item {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;

  .item-inner {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    color: #fff;

    img {
      width: 100%;
    }

    .infos {
      position: absolute;
      bottom: 0;
      padding: 10px;

      .summary {
        margin-bottom: 5px;
      }

      .name {
        margin-bottom: 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right: 10px;
      }

      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>