import MyHeader from './Header.vue';

const Header = {
    install(Vue: any) {
        Vue.component('Header', MyHeader);
    },
};

export default Header;
