<template>
    <div v-show="loading">
        <van-loading color="#fff" size="60px" class="loading"
            >加载中...</van-loading
        >
        <div class="layer"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Loading } from 'vant';
@Component({
    components: {
        [Loading.name]: Loading,
    },
})
export default class MyLoading extends Vue {
    @Prop({ default: false }) private loading!: boolean;
}
</script>

<style lang="stylus" scoped>
.loading
    width 100px
    height 80px
    position absolute
    top 50%
    left 50%
    margin-top -40px
    margin-left -50px
    z-index 10001
    text-align center
    .van-loading__text
        color #fff
        margin-top 4px
.layer
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    background rgba(0, 0, 0, .3)
    z-index 10000
</style>
