import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css'
import './assets/roboto.css'
import './assets/material-icons.css'
import * as echarts from 'echarts';

Vue.prototype.echarts = echarts;
Vue.use(MuseUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
