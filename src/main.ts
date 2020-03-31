import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'normalize.css/normalize.css'; // 样式初始化，并保证各浏览器默认HTML元素样式的统一
import 'amfe-flexible'; // 动态设置rem的基准值
import './styles/index.styl'; // 基本样式
import './components'; // 全局组件

import './utils/filters.ts'; // 过滤器
import 'vant/lib/icon/local.css'; // 本地字体文件

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h: (arg0: any) => any) => {
        return h(App);
    },
}).$mount('#app');
