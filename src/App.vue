<template>
    <n-config-provider :theme-overrides="themeOverrides">
        <home></home>
  </n-config-provider>
   
</template>

<script setup>
import home from './pages/home.vue'
import { NConfigProvider } from 'naive-ui'
// 主题色
const themeOverrides = {
    "common": {
      "primaryColor": "#16CCE4FF",
      "primaryColorHover": "#B9EAEEFF",
      "primaryColorPressed": "#0EEEDBFF",
      "primaryColorSuppl": "#07D6C5FF"
    }}
</script>



<style scoped>
</style>
