<script setup>
import {useRoute, useRouter} from "vue-router";
import {getInfosData} from "@/service";
import {computed, ref} from "vue";
import DetailSwipe from "@/views/detail/cpns/detail_01-swipe.vue";
import DetailInfos from "@/views/detail/cpns/detail_02-infos.vue"
import DetailFacility from "@/views/detail/cpns/detail_03-facility.vue";
import DetailLandlord from "@/views/detail/cpns/detail_04-landlord.vue";

const route = useRoute();
const router = useRouter();
const houseId = route.params.id;

//发送网络请求
const detailInfos = ref({});
const mainPart = computed(() => detailInfos.value.mainPart);
getInfosData(houseId).then(res => {
  detailInfos.value = res.data;
})
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
      <detail-infos :topInfos="mainPart.topModule"/>
      <detail-facility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord :landlord="mainPart.dynamicModule.landlordModule"/>
    </div>
  </div>
</template>

<style scoped lang="less">
.detail {
  --van-nav-bar-title-text-color: var(--primary-color);
}

</style>