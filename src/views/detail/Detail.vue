<script setup>
import {useRoute, useRouter} from "vue-router";
import {getInfosData} from "@/service";
import {computed, ref} from "vue";
import DetailSwipe from "@/views/detail/cpns/detail_01-swipe.vue";
import DetailInfos from "@/views/detail/cpns/detail_02-infos.vue"
import DetailFacility from "@/views/detail/cpns/detail_03-facility.vue";
import DetailLandlord from "@/views/detail/cpns/detail_04-landlord.vue";
import DetailComment from "@/views/detail/cpns/detail_05-comment.vue";
import DetailNotice from "@/views/detail/cpns/detail_06-notice.vue";
import DetailMap from "@/views/detail/cpns/detail_07-map.vue";
import DetailIntro from "@/views/detail/cpns/detail_08-intro.vue";
import useScroll from "@/hooks/useScroll";
import TabControl from "@/components/TabControl/TabControl.vue";

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

const detailRef = ref();
const {scrollTop} = useScroll(detailRef);
const showTab = computed(() => scrollTop.value >= 300);

const sectionEls = ref({});
const names = computed(() => {
  return Object.keys(sectionEls.value);
})
const getSectionRef = (value) => {
  if (!value) return;
  const name = value.$el.getAttribute("name")
  sectionEls.value[name] = value.$el;
}
const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index];
  const el = sectionEls.value[key];
  let instance = el.offsetTop;
  if (index !== 0) instance -= 45;
  detailRef.value.scrollTo({
    top: el.offsetTop - 45,
    behavior: "smooth"
  })
}
</script>

<template>
  <div class="detail top-page" ref="detailRef">
    <tab-control
        class="tab-control"
        v-if="showTab"
        :tab-data="names"
        @tabItemClick="tabClick"
    />
    <van-nav-bar
        title="房屋详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <detail-infos name="描述" :ref="getSectionRef" :topInfos="mainPart.topModule"/>
      <detail-facility name="设施" :ref="getSectionRef"
                       :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"/>
      <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice name="须知" :ref="getSectionRef" :notice="mainPart.dynamicModule.rulesModule.orderRules"/>
      <detail-map name="周知" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/>
      <detail-intro :price-intro="mainPart.introductionModule"/>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="slogan">
        August旅途，永无止境!
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.detail {
  --van-nav-bar-title-text-color: var(--primary-color);
  height: 100vh;
  overflow: auto;

  .tab-control {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    img {
      height: 20px;
    }

    .slogan {
      font-size: 12px;
      color: rgba(148, 148, 148, 1);
      margin-top: 10px;
    }
  }
}

</style>