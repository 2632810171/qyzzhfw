<script setup lang="ts">
import { Dislike, Search, CloseOne, Close } from '@icon-park/vue-next';
</script>

<template>
  <h5>
    <dislike theme="outline" size="24" fill="#333" :stroke-width="2" stroke-linejoin="bevel" />
    <search theme="outline" size="24" fill="#333" :stroke-width="2" stroke-linejoin="bevel" />
    <close-one theme="outline" size="24" fill="#333" :stroke-width="2" stroke-linejoin="bevel" />
    <close theme="outline" size="24" fill="#333" :stroke-width="2" stroke-linejoin="bevel" />
  </h5>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</template>

<style lang="less" scoped>
h5 {
  padding: 0;
  margin: 0;
}
</style>
