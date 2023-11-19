<script setup>
import {toRefs} from "vue";

const props = defineProps({
  topInfos: {
    type: Object,
    default: () => ({})
  }
})
const {houseName, houseTags, commentBrief, nearByPosition} = toRefs(props.topInfos)
</script>

<template>
  <div class="infos">
    <div class="name">
      {{ houseName }}
    </div>
    <div class="tags">
      <template v-for="(item, index) in houseTags" :key="index">
        <span
            v-show="item?.tagText?.text"
            class="item"
            :style="{
          color:item?.tagText?.color,
          backgroundColor:item?.tagText?.background?.color
        }"
        >
          {{ item?.tagText?.text }}
        </span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <span class="score">
          {{ commentBrief.overall }}
        </span>
        <span class="title">
          {{ commentBrief.scoreTitle }}
        </span>
        <span class="brief">
          "{{ commentBrief.commentBrief }}"
        </span>
      </div>
      <div class="right">
        <span class="count">
          {{ topInfos.commentBrief.totalCount }}条评论
          <van-icon name="arrow"/>
        </span>
      </div>
    </div>
    <div class="location">
      <div class="left">
        {{ nearByPosition.address }}
      </div>
      <div class="right">
        <span class="count">
          地图.周边
          <van-icon name="arrow"/>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.infos {
  margin-bottom: 40px;

  .name {
    margin-top: 5px;
    padding: 0 10px;
    font-size: 22px;
    font-weight: 700;
  }

  .tags {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .item {
      padding: 2px;
      font-size: 12px;
      line-height: 1;
      box-sizing: border-box;
    }
  }

  .comment,
  .location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 10px;
    background-color: #F6F7FB;
    padding: 10px 10px;
    border-radius: 5px;

    .right {
      color: var(--primary-color);
      width: 120px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }

  .comment {
    .left {
      .score {
        font-size: 16px;
        font-weight: 700;
      }

      .title {
        font-weight: 700;
        margin: 0 5px;
      }

      .title,
      .brief {
        font-size: 12px;
      }
    }
  }

  .location {
    .left {
      font-weight: 700;
    }
  }
}
</style>