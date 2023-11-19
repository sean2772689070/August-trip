<script setup>

import DetailSection from "@/components/DetailSection/DetailSection.vue";
import {toRefs} from "vue";

const props = defineProps({
  houseFacility: {
    type: Object,
    default: () => ({})
  }
})
const {houseFacilitys, facilitySort} = toRefs(props.houseFacility);
</script>

<template>
  <div class="facility">
    <detail-section title="房屋设施" more-text="查看全部设施">
      <div class="facility-inner">
        <template v-for="(item, index) in houseFacilitys" :key="index">
          <div class="group" v-if="facilitySort?.includes(item.groupId)">
            <div class="left">
              <div class="icon">
                <img :src="item.icon" alt="">
              </div>
              <div class="name">
                基础设施
              </div>
            </div>
            <div class="list">
              <template v-for="(value, index) in item.facilitys.slice(0,4)" :key="index">
                <div class="value">
                  <van-icon name="passed" color="#14e2ca"/>
                  {{ value.name }}
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<style scoped lang="less">
.facility {
  .facility-inner {
    background-color: #F6F7FB;
    padding: 20px;

    .group {
      display: flex;
      align-items: flex-end;

      .left {
        height: 44px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .icon {
          img {
            width: 24px;
          }
        }

        .name {
          width: 60px;
        }
      }

      .list {
        height: 44px;
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;

        .value {
          width: 50%;
        }
      }
    }

    .group:nth-child(2) {
      margin: 20px 0;
    }
  }
}
</style>