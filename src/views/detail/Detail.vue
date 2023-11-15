<script setup>
import {useRoute, useRouter} from "vue-router";
import {getInfosData} from "@/service";
import {computed, ref} from "vue";
import DetailSwipe from "@/views/detail/cpns/DetailSwipe.vue";

const route = useRoute();
const router = useRouter();
const houseId = route.params.id;

//发送网络请求
const detailInfos = ref({});
const mainPart = computed(() => detailInfos.value.mainPart);
getInfosData(houseId).then(res => {
  detailInfos.value = res.data;
})
console.log(mainPart.value);
const onClickLeft = () => router.back();
</script>

<template>
  <div class="detail top-page">
    <van-nav-bar
        title="房屋详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
    </div>
  </div>
</template>

<style scoped lang="less">
.detail {
  --van-nav-bar-title-text-color: var(--primary-color);
}

</style>