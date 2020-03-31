import MyLoading from './Loading.vue';

const Loading = {
    install(Vue: any) {
        Vue.component('Loading', MyLoading);
    },
};

export default Loading;
