import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression'
import {Plugin as importToCDN} from 'vite-plugin-cdn-import'
export default defineConfig({
    base: './',
    plugins: [
      vue(),
      // gzip压缩 生产环境生成 .gz 文件
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      importToCDN({
        modules: [
            {
                name: 'vue',
                var: 'Vue',
                path: 'https://cdn.jsdelivr.net/npm/vue@3.2.25/dist/vue.global.prod.js'
            },
            {
                name: 'vue-i18n',
                var: 'VueI18n',
                path: 'https://cdn.bootcdn.net/ajax/libs/vue-i18n/9.1.10/vue-i18n.global.prod.min.js'
            },
            {
                name: 'vue-router',
                var: 'VueRouter',
                path: 'https://unpkg.com/vue-router@4.0.16/dist/vue-router.global.prod.js'
            },
    
            {
                name: 'element-plus',
                var: 'ElementPlus',
                path: `https://unpkg.com/element-plus@2.2.6/dist/index.full.js`,
                css: 'https://unpkg.com/element-plus/dist/index.css'
            },
            {
                name: 'vue-demi',
                var: 'VueDemi',
                path: 'https://cdn.bootcdn.net/ajax/libs/vue-demi/0.13.1/index.iife.js'
            },
            {
                name: 'pinia',
                var: 'Pinia',
                path: 'https://cdn.bootcdn.net/ajax/libs/pinia/2.0.14/pinia.iife.prod.min.js'
            },
            {
                name: '@smallwei/avue',
                var: 'AVUE',
                path: 'https://cdn.jsdelivr.net/npm/@smallwei/avue@3.0.17'
            }
        ]
    }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src') ,
      },
    },
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: 3000,
      // 监听所有地址
      host: '0.0.0.0',
      // 服务启动时是否自动打开浏览器
      open: true,
      // 允许跨域
      cors: true,
      // 自定义代理规则
      proxy: {
        ['/api']: {
          target: 'http://music.163.com',
          changeOrigin: true,
          pathRewrite: {
            ['^/api']: '',
          },
        },
      },
    },
    build: {
      // 设置最终构建的浏览器兼容目标
      target: 'es2015',
      // 构建后是否生成 source map 文件
      sourcemap: false,
      //  chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
    },
    css:{
      preprocessorOptions:{
        scss:{
          // additionalData:'@import "@/assets/style/main.scss";'
        }
      }
    },
});