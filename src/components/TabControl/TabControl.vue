<script setup>
import {ref} from "vue";

const props = defineProps({
  tabData: {
    type: Array,
    default: () => []
  }
})


const isShow = ref(0);
const emit = defineEmits(["tabItemClick"])
const changeColor = (index) => {
  isShow.value = index;
  emit("tabItemClick", index)
}

</script>

<template>
  <div class="tab-control">
    <template v-for="(item, index) in tabData" :key="index">
      <div :class="isShow === index && 'item-click'" @click="changeColor(index)" class="item">
        {{ item }}
      </div>
    </template>
  </div>
</template>

<style scoped lang="less">
.tab-control {
  height: 45px;
  padding-top: 6px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;

  .item {
    padding: 5px;
  }

  .item-click {
    color: var(--primary-color);
    border-bottom: 3px solid var(--primary-color);
  }
}
</style>