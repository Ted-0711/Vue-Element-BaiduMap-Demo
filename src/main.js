import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(BaiduMap, { ak: 'Your AK' })

new Vue({
  render: h => h(App),
}).$mount('#app')
