<script setup>
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
const {image, summaryText, houseName, location, finalPrice, productPrice, priceTipBadge} = props.itemData;
</script>

<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="image.url" alt="">
      </div>
      <div class="infos">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span>{{ location }}</span>
        </div>
        <div class="name">{{ houseName }}</div>
        <div class="summary">{{ summaryText }}</div>
        <div class="price">
          <div class="new">{{ "￥" + finalPrice }}</div>
          <div class="old">{{ "￥" + productPrice }}</div>
          <div class="tip">{{ priceTipBadge?.text || '已减￥' + (productPrice - finalPrice) }}</div>
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
    .cover {
      img {
        width: 100%;
      }
    }

    .infos {
      padding: 10px;

      .location {
        padding: 5px 0;
        height: 14px;
        display: flex;
        align-items: center;

        img {
          height: 100%;
        }
      }

      .summary {
        margin-bottom: 5px;
      }

      .name {
        font-size: 16px;
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
        align-items: center;

        .new {
          margin-right: 5px;
          font-size: 18px;
          color: var(--primary-color);
        }

        .old {
          text-decoration: line-through;
          margin-right: 5px;
          font-size: 12px;
        }

        .tip {
          padding: 0 5px;
          margin-right: 5px;
          border-radius: 7px;
          color: #fff;
          background: #FA7562;
        }
      }
    }
  }
}
</style>