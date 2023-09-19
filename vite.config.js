import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import ViteRequireContext from '@originjs/vite-plugin-require-context';
import envCompatible from 'vite-plugin-env-compatible';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { viteMockServe } from 'vite-plugin-mock';
// https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      mockPath: 'mock',
      // enable: false,
      logger: true,
      watchFiles: true,
    }),
    // ViteRequireContext(),
    // viteCommonjs(),
    // envCompatible(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'element-plus-admin-template',
        },
      },
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      symbolId: 'icon-[dir]-[name]',
      svgoOptions: true,
    }),
  ],
  base: './',
  server: {
    strictPort: false,
    port: 9528,
    open: true,
    // middlewareMode: require('./mock/mock-server.js')
  },
  build: {
    outDir: 'dist',
  },
  define: {
    // VITE_APP_BASE_API: import.meta.env.VITE_APP_BASE_API,
  },
});
