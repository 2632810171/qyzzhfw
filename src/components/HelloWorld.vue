<script setup lang="ts">
import { Aiming, Camera } from '@icon-park/vue-next';
defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <h1>iconpark icon</h1>
  <aiming theme="outline" size="24" fill="#333" :stroke-width="2" stroke-linejoin="bevel" />
  <camera theme="outline" size="24" fill="#333" :stroke-width="2" stroke-linejoin="bevel" />
</template>

<style scoped lang="less">
h1 {
  font-size: 22px;
}

.read-the-docs {
  color: #888;
}
</style>
