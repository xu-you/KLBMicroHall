<template>
    <div class="standard-header header">
        <div class="left" @click="goBack">
            <slot name="left"
                ><van-icon name="arrow-left" color="#333" size="0.66667rem"
            /></slot>
        </div>
        <div class="center"><slot></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Icon } from 'vant';

@Component({
    components: {
        [Icon.name]: Icon,
    },
})
export default class Header extends Vue {
    @Prop({ default: '' }) private path!: string;
    private goBack(): void {
        switch (this.path) {
            case '':
                this.$router.go(-1);
                break;
            default:
                this.$router.push({
                    path: this.path,
                });
                break;
        }
    }
}
</script>

<style lang="stylus" scoped>

.header
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index 9999
    margin 0 auto
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
    background #fff
    padding 0 20px
    display flex
    align-items center
    justify-content space-between
    margin-bottom 10px

    .left, .right
        width 25px
        height 100%
        overflow hidden
        display flex
        align-items center
        justify-content center
    .center
        flex 1
        height 100%
        line-height 45px
        font-size 18px
        text-align center
    .van-icon
        line-height 45px
</style>
