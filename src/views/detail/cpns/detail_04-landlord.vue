<script setup>

import DetailSection from "@/components/DetailSection/DetailSection.vue";
import {toRefs} from "vue";

const props = defineProps({
  landlord: {
    type: Object,
    default: () => ({})
  }
})
const {topScroll, hotelLogo, hotelName, hotelTags, hotelSummary} = toRefs(props.landlord);
</script>

<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div class="intro">
        <div class="top">
          <img :src="topScroll" alt="">
        </div>
        <div class="header">
          <div class="left">
            <div class="logo">
              <img :src="hotelLogo" alt="">
            </div>
            <div class="user">
              <div class="name">
                {{ hotelName }}
              </div>
              <div class="message">
                <template v-for="(item, index) in hotelTags" :key="index">
                <span class="item">
                  {{ item.tagText.text }}
                </span>
                  <van-divider v-if="hotelTags.length-index-1" vertical :style="{ borderColor: item.tagText.color }"/>
                </template>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="btn">
              联系房东
            </div>
          </div>
        </div>
        <div class="footer">
          <template v-for="(item, index) in hotelSummary" :key="index">
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="introduction">{{ item.introduction }}</div>
              <div class="tip">{{ item.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<style scoped lang="less">
.intro {
  .top {
    img {
      width: 100%;
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;

    .left {
      display: flex;
      align-items: center;

      .logo {
        margin-right: 5px;

        img {
          width: 60px;
        }
      }

      .user {
        .name {
          font-weight: 700;
        }

        .message {
          font-size: 12px;
          color: #949494;
          display: flex;
          align-items: center;

          .item {
            line-height: 1;
          }
        }
      }
    }

    .right {
      .btn {
        padding: 5px 10px;
        color: #fff;
        border-radius: 5px;
        font-size: 12px;
        background: var(--theme-linear-gradient);
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    .item {
      .title,
      .tip {
        font-size: 12px;
      }

      .introduction {
        font-weight: 700;
        font-size: 16px;
        margin: 5px 0;
      }
    }
  }
}
</style>