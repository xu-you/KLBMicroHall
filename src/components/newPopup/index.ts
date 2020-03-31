import MynewPopup from './newPopup.vue';

const newPopup = {
    install(Vue: any) {
        Vue.component('newPopup', MynewPopup);
    },
};

export default newPopup;
