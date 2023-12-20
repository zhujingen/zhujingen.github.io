<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p class='test'>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <hr/>
  <button @click="updateName">修改store中的name</button>
  <n-button>naive-ui</n-button>
  <n-config-provider :locale="zhCN" :theme="theme">
    <!-- 容器 -->
    <button @click="updateName">修改store中的name</button>
    <n-button>naive-ui</n-button>
</n-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import { useMainStore } from '@/store/main.js'
import { NButton } from "naive-ui"

const mainStore = useMainStore()
const count = ref(0)
defineProps({
  msg: String,
})
const updateName = ()=>{
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了'
  })
}

console.log(import.meta.env.VITE_APP_WEB_URL)
</script>



<style scoped>
.read-the-docs {
  color: #888;
}
.test{
  color: $test-color;
}
</style>
