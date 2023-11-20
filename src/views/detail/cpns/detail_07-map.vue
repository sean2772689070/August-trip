<script setup>

import DetailSection from "@/components/DetailSection/DetailSection.vue";
import {onMounted, ref, toRefs} from "vue";

const props = defineProps({
  position: {
    type: Object,
    default: () => ({})
  }
})
const {longitude, latitude} = toRefs(props.position);

const mapRef = ref();
onMounted(() => {
  const map = new BMapGL.Map(mapRef.value);          // 创建地图实例
  const point = new BMapGL.Point(longitude.value, latitude.value);  // 创建点坐标
  const marker = new BMapGL.Marker(point);        // 创建标注
  map.addOverlay(marker);                     // 将标注添加到地图中
  map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true);
})

</script>

<template>
  <div class="map">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div class="baidu" ref="mapRef">
      </div>
    </detail-section>
  </div>
</template>

<style scoped lang="less">
.baidu {
  height: 250px;
}
</style>