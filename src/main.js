import * as Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn' // lang i18n
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import SvgIcon from '@/components/SvgIcon'; // svg component
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

window.$vueApp = Vue.createApp(App)
// set ElementPlus lang to ZH
window.$vueApp.use(ElementPlus, { locale:zhCn })
// register globally
window.$vueApp.component('svg-icon', SvgIcon);

window.$vueApp.config.globalProperties.routerAppend = (path, pathToAppend) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
window.$vueApp.use(store)
window.$vueApp.use(router)
window.$vueApp.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  window.$vueApp.component(key, component)
}
