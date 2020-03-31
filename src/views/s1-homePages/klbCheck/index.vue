<template>
    <div class="klbChexk">
        <van-tabs
            v-model="active"
            color="#EB3E2D"
            title-active-color="#EB3E2D"
            :line-width="25"
            :line-height="2"
            :font-size="15"
        >
            <van-tab title="银行理财">
                <div class="chosen-swiper-box">
                    <div class="chosen-swiper-box-title">
                        <div class="title-name">
                            <img
                                class="title-icon"
                                src="../../../img/tip_昆仑财富.png"
                                alt=" "
                            />
                            <span class="title-iconname"
                                >油钱赚系列开放式非净值型理财产油钱赚系列开放式非净值型理财产</span
                            >
                        </div>
                        <div class="footer">
                            <div class="footer-left">
                                <div class="footer-left-num">3.40%</div>
                                <div class="footer-left-wen">
                                    七日年化收益
                                </div>
                            </div>
                            <div class="footer-rigth">
                                <div class="footer-rigth-title">
                                    无固定期限
                                </div>
                                <div class="footer-rigth-title1">
                                    期限
                                </div>
                            </div>
                        </div>
                    </div>
                    <van-divider />
                    <div class="chosen-swiper-box-title">
                        <div class="title-name">
                            <img
                                class="title-icon"
                                src="../../../img/tip_昆仑财富.png"
                                alt=" "
                            />
                            <span class="title-iconname"
                                >油钱赚系列开放式非净值型理财产油钱赚系列开放式非净值型理财产</span
                            >
                        </div>
                        <div class="footer">
                            <div class="footer-left">
                                <div class="footer-left-num">3.40%</div>
                                <div class="footer-left-wen">
                                    七日年化收益
                                </div>
                            </div>
                            <div class="footer-rigth">
                                <div class="footer-rigth-title">
                                    无固定期限
                                </div>
                                <div class="footer-rigth-title1">
                                    期限
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="财富计划">内容 2</van-tab>
            <van-tab title="大额存单">内容 3</van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class KlbChexk extends Vue {
    private active: number = 0;
}
</script>

<style lang="stylus" scoped>
.van-tab__text{
    font-size 15px
    font-weight:bold;
}
.chosen-swiper-box{
    margin-top: 10px;
    position: relative;
    display:block!important;
    border 0.5px solid #ffffff;
    border-radius: 10px;
    background:rgba(250,250,250,1);
    .chosen-swiper-box-title {
        margin 0 10px 0 10px;
        .title-name {
            background red
            .title-icon{
                position: absolute;
                top: 6px;
                width: 59px;
                height: 18px;
            }
            .title-iconname{
                position: absolute;
                width 225px;
                top: 6px;
                left: 73px;
                font-size: 13px;
                font-weight: bold;
                line-height 20px
                color: rgba(51, 51, 51, 1);
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;

            }
        }
        .title-more-icon {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: .26rem;
            width: 10px;
            height: 10px;
        }
        .footer{
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            font-size 15px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:bold;
            color:rgba(51,51,51,1);
            margin-top: 40px;
            line-height 25px
            .footer-left{
                width 50%
                border-right:1px solid rgba(200,158,124,1);
                margin-bottom: 15px
            }
            .footer-left-num{
                font-size:20px;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:bold;
                color:rgba(235,62,45,1);
                // line-height 26px
            }
            .footer-left-wen{
                font-size:10px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(200,158,124,1);
                line-height 20px
            }
            .footer-rigth {
                position: absolute;
                right: 30px;
                .footer-rigth-title{
                    font-size:18px;
                    font-family:PingFangSC-Semibold,PingFang SC;
                    font-weight:600;
                    color:rgba(51,51,51,1);
                    // line-height:25px;
                }
                .footer-rigth-title1{
                    font-size:10px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(200,158,124,1);
                    // line-height:15px;
                }
            }
        }

    }
}
</style>
