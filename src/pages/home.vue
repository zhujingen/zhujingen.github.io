<template>
  <div class="mean" id="drawer-target">
    <n-menu v-model:value="activeMenu" mode="horizontal" :options="menuOptions" />
    <span class='music-icon' @click='showMusic'> </span>
    <div class="poetry">
      <div class="verse">
        <TypeIt :values="[poetry]" :cursor="false" :speed="250" />
      </div>
    </div>
    <!-- 北风卷地白草折，胡天八月即飞雪。
忽如一夜春风来，千树万树梨花开。
散入珠帘湿罗幕，狐裘不暖锦衾薄。
将军角弓不得控，都护铁衣冷难着。
瀚海阑干百丈冰，愁云惨淡万里凝。
中军置酒饮归客，胡琴琵琶与羌笛。
纷纷暮雪下辕门，风掣红旗冻不翻。
轮台东门送君去，去时雪满天山路。
山回路转不见君，雪上空留马行处。 -->
    <!-- 抽屉音乐 -->
    <n-drawer v-model:show="activeMusic" :width="380" placement="right" :trap-focus="false" :block-scroll="false"
      display-directive="show">
      <n-drawer-content title="音乐播放器">
        <lbAudio :musicList="musicList" playOrder="random"></lbAudio>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup>

  import { defineComponent, h, ref } from "vue";
  import { NIcon, useMessage, NMenu, NDrawer, NDrawerContent } from "naive-ui";
  import http from "@/service/http";
  import lbAudio from "lb-audio-v3";
  import { musicList, menuOptions } from "./config.js";
  // 引入组件样式
  import "lb-audio-v3/style";
  import TypeIt from "./typeit.js";

  const activeMenu = ref("null");
  const activeMusic = ref(false);
  const poetry = ref([
    // '北风卷地白草折，胡天八月即飞雪',
    // '忽如一夜春风来，千树万树梨花开',
    // '散入珠帘湿罗幕，狐裘不暖锦衾薄',
    // '将军角弓不得控，都护铁衣冷难着',
    // '瀚海阑干百丈冰，愁云惨淡万里凝',
    // '中军置酒饮归客，胡琴琵琶与羌笛',
    // '纷纷暮雪下辕门，风掣红旗冻不翻',
    // '轮台东门送君去，去时雪满天山路',
    '北风卷地白草折，胡天八月即飞雪。忽如一夜春风来，千树万树梨花开。散入珠帘湿罗幕，狐裘不暖锦衾薄。将军角弓不得控，都护铁衣冷难着。瀚海阑干百丈冰，愁云惨淡万里凝。中军置酒饮归客，胡琴琵琶与羌笛。纷纷暮雪下辕门，风掣红旗冻不翻。轮台东门送君去，去时雪满天山路。山回路转不见君，雪上空留马行处。',
  ])
  // function renderIcon(icon) {
  //   return () => h(NIcon, null, { default: () => h(icon) });
  // }

  // function renderImg(img) {
  //   return () =>  h('img', {
  //                 src: img,
  //                 width: '20',
  //                 height: '20',
  //             })
  // }
  function showMusic() {
    activeMusic.value = true
  }
</script>

<style lang="scss" scoped>
  .mean {
    /* overflow-x: hidden; */
  }

  .n-menu {
    position: absolute;
    top: 10px;
    right: 50px;
  }

  .music-icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-image: url(./images/music.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: fixed;
    bottom: 25px;
    right: 30px;
  }

  :deep(.audio-container) {
    position: absolute;

    .lrc-container {
      position: absolute;
      top: 680px;
      z-index: 12;
    }
  }
  .poetry {
    display: flex;
    flex-direction: row-reverse;

    .verse {
      writing-mode: vertical-rl;
      height: 230px;
      .type-it{
        display: flex;
        font-size: 24px;
        font-family: Verse-D;
      }
    }
  }
</style>