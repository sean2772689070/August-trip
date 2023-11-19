<script setup>

const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

const swipeGroup = {}
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory];
  if (!valueArray) {
    valueArray = [];
    swipeGroup[item.enumPictureCategory] = valueArray;
  }
  valueArray.push(item);
}
//转换数据的方法
const nameReg = /【(.*?)】/i
const getName = (name) => {
  const results = nameReg.exec(name);
  return results[1];
}

const getCategoryIndex = (item) => {
  const valueAeeay = swipeGroup[item?.enumPictureCategory];
  return valueAeeay?.findIndex(data => data === item) + 1;
};
</script>

<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white" lazy-render>
      <template v-for="(item,index) in swipeData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{active, total}">
        <div class="indicator">
          <template v-for="(value, key) in swipeGroup" :key="key">
          <span
              class="item"
              :class="{active: swipeData[active]?.enumPictureCategory === Number(key)}"
          >
            <span class="text">
              {{ getName(value[0].title) }}
            </span>
            <span v-show="swipeData[active]?.enumPictureCategory === Number(key)" class="count">
              {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
            </span>
          </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style scoped lang="less">
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      display: flex;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, .8);

      .item {
        margin: 0 3px;
        padding: 2px 10px;
        line-height: 1;
        border-radius: 8px;

        &.active {
          color: #000;
          background: #fff;
        }
      }
    }
  }
}
</style>