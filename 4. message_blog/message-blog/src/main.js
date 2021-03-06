import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
