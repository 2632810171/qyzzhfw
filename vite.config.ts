import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import pxtoviewport from 'postcss-px-to-viewport';
import svgLoader from 'vite-svg-loader';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      dts: path.resolve(__dirname, './src/auto-imports.d.ts'),
    }),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: false })],
      dts: path.resolve(__dirname, './src/components.d.ts'),
    }),
  ],
  css: {
    postcss: {
      plugins:
        process.env.TARGET === 'mobile'
          ? [
              pxtoviewport({
                viewportWidth: 750,
                propList: ['*'],
                // viewportUnit: 'vmin',
              }),
            ]
          : [],
    },
  },
  base: process.env.NODE_ENV !== 'production' ? '/' : process.env.TARGET === 'pc' ? '/web' : '/webapp',
  build: {
    outDir: path.resolve(__dirname, process.env.TARGET === 'pc' ? 'dist-pc' : 'dist-mobile'), // 打包输出文件夹
  },
  server: {
    host: '0.0.0.0',
    port: 8001,
    // // 是否自动在浏览器打开
    // open: true,
    // // 是否开启 https
    // https: false,
    // // 服务端渲染
    // ssr: false,
    proxy: {
      '/api': {
        target: 'http://192.168.1.233:8000/',
        changeOrigin: true,
        ws: true,
        rewrite: pathStr => pathStr.replace('/api', ''),
      },
    },
  },
  resolve: {
    // 导入文件夹别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
