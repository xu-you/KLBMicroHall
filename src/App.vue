<template>
    <div id="app">
        <transition :name="transName">
            <router-view />
        </transition>
        <tabbar v-if="!flag" />
    </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import tabbar from '@/components/tabbar/index.vue';

// @Component必写，否则@Watch修饰器会报错
@Component({
    components: {
        tabbar,
    },
})
export default class App extends Vue {
    private transName: string = 'slide-left';
    private flag: boolean = false;

    @Watch('$route')
    onChangeValue(to: any, from: any) {
        // eslint-disable-next-line no-debugger
        to.meta.index > from.meta.index
            ? (this.transName = 'slide-left')
            : (this.transName = 'slide-right');
        if (
            to.fullPath === '/myPages' ||
            to.fullPath === '/product' ||
            to.fullPath === '/homePages'
        ) {
            this.flag = false;
        } else {
            this.flag = true;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import './styles/standard.styl';
#app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    // text-align center
    // color #2c3e50
    height 100%
    // background $back
</style>
