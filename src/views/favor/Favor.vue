<script setup>

</script>

<template>
  <div class="favor">
    <h2>favor</h2>
    <template v-for="item in 100">
      <h2>favor：{{ item }}</h2>
    </template>
  </div>
</template>

<style scoped lang="less">
.favor {
  height: 200px;
  background: red;
  overflow-y: auto;
}
</style>