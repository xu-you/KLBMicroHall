<template>
    <div class="newPopup">
        <van-popup
            v-model="show"
            round
            closeable
            close-icon="close"
            class="bindCardImg-box"
        >
            <img class="bindCardImg" src="../../img/box_img未绑卡.png" alt="" />
            <div>
                <span>尊敬的用户，您尚未绑定银行卡</span>
                <van-button type="default" size="large" @click="clickOpen"
                    >开通</van-button
                >
                <span>稍后绑卡，跳过</span>
            </div>
        </van-popup>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Popup } from 'vant';
@Component({
    components: {
        [Popup.name]: Popup,
    },
})
export default class NewPopup extends Vue {
    @Prop({ default: false }) private show!: boolean;
}
</script>

<style lang="stylus">
.van-popup
    position: fixed;
    max-height: 100%;
    overflow-y: visible;
    background-color: #fff;
    .bindCardImg-box
        width 80%
        height 40%
        .bindCardImg
            width 100px
            height 100px
            display flex
            justify-content: center;
            align-items: center;
            margin -30px auto
</style>
