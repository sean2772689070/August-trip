<script setup>

import DetailSection from "@/components/DetailSection/DetailSection.vue";
import {toRefs} from "vue";

const props = defineProps({
  comment: {
    type: Object,
    default: () => ({})
  }
})
const {overall, scoreTitle, totalCount, subScores, commentTagVo, comment} = toRefs(props.comment);
</script>

<template>
  <div class="comment">
    <detail-section title="热门评论" :more-text="'查看全部'+totalCount+'条评论'">
      <div class="inner">
        <div class="header">
          <div class="left">
            <div class="overall">
              {{ overall }}
              <div class="icon"></div>
            </div>
            <div class="content">
              <div class="title">{{ scoreTitle }}</div>
              <div class="count">{{ totalCount }}条评论</div>
              <van-rate v-model="overall" readonly allow-half color="var(--primary-color)"/>
            </div>
          </div>
          <div class="right">
            <template v-for="(item, index) in subScores" :key="index">
              <div class="item">
                {{ item }}
              </div>
            </template>
          </div>
        </div>
        <div class="list">
          <template v-for="(item, index) in commentTagVo" :key="index">
            <div class="item" :style="{'backgroundColor' : item.backgroundColor, 'color' : item.color}">
              {{ item.text }}
            </div>
          </template>
        </div>
        <div class="footer">
          <div class="user">
            <div class="avatar">
              <img :src="comment.userAvatars" alt="">
            </div>
            <div class="text">
              <div class="name">
                {{ comment.userName }}
              </div>
              <div class="date">
                {{ comment.checkInDate }}
              </div>
            </div>
          </div>
          <div class="comment">
            {{ comment.commentDetail }}
          </div>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<style scoped lang="less">
.inner {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;

      .overall {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 36px;
        font-weight: 700;
        margin-right: 20px;

        .icon {
          --overall-height: 6px;
          width: 100%;
          height: var(--overall-height);
          border-radius: calc(var(--overall-height) / 2);
          background-color: var(--primary-color);
        }
      }

      .content {
        width: 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        --van-rate-icon-size: 12px;

        .count {
          color: rgba(148, 148, 148, 1);
          font-size: 12px;
          margin: 2px 0;
        }
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;

      .item {
        display: flex;
        justify-content: flex-end;
        width: 50%;
        font-size: 12px;
      }
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;

    .item {
      font-size: 12px;
      border-radius: 10px;
      padding: 2px 4px;
      margin: 5px 5px;
      line-height: 1;
    }
  }

  .footer {
    .user {
      display: flex;
      margin-bottom: 10px;

      .avatar {
        --avatar-size: 36px;
        width: var(--avatar-size);
        height: var(--avatar-size);
        border-radius: calc(var(--avatar-size) / 2);
        overflow: hidden;
        margin-right: 4px;

        img {
          width: var(--avatar-size);
        }
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .date {
          font-size: 12px;
          color: rgba(148, 148, 148, 1);
        }
      }
    }

    .comment {
      margin-right: 20px;
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
}
</style>