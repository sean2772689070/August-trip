<script setup>
defineProps({
  title: {
    type: String,
    default: "默认标题",
  },
  moreText: {
    type: String,
    default: "查看全部"
  }
})
</script>

<template>
  <div class="section">
    <div class="header">
      <h2 class="title">
        {{ title }}
      </h2>
    </div>
    <div class="content">
      <slot>
        <h3>我是默认内容</h3>
      </slot>
    </div>
    <div class="footer">
      <span class="more">
        {{ moreText }}
      </span>
      <van-icon name="arrow"/>
    </div>
  </div>
</template>

<style scoped lang="less">
.section {
  padding: 10px 10px;
  border-top: 5px solid #f2f3f4;

  .header {
    border-bottom: 1px solid rgba(162, 162, 162, .2);
    padding: 20px 0;
  }

  .content {
    padding: 10px 0;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: var(--primary-color);
    height: 44px;
  }
}
</style>