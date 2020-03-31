<template>
    <div class="box">
        <div class="header">
            <div class="box-header">
                <img class="box-img" src="../../img/头部底图.png" alt="" />
            </div>
            <div class="header-logo">
                <img src="../../img/logo.png" alt="" />
                <span class="header-logo-common">您好！请先登录！</span>
                <span class="button-login" @click="handleLogin">登录</span>
            </div>
        </div>
        <div class="swipe-box">
            <div class="main-box">
                <van-swipe
                    class="my-swipe"
                    :autoplay="2000"
                    indicator-color="white"
                >
                    <van-swipe-item>
                        <img src="../../img/banner01.png" alt="" />
                    </van-swipe-item>
                    <van-swipe-item>
                        <img src="../../img/banner02.png" alt="" />
                    </van-swipe-item>
                    <van-swipe-item>
                        <img src="../../img/banner01.png" alt="" />
                    </van-swipe-item>
                </van-swipe>
                <div class="hotMore">
                    <div class="title">热销产品</div>
                    <div class="more">
                        更多
                        <i class="more-icon"
                            ><img src="../../img/icon_youjtou.png" alt=""
                        /></i>
                    </div>
                </div>
                <div class="chosen-container">
                    <div class="chosen-swiper">
                        <div class="chosen-swiper-box">
                            <div class="chosen-swiper-box-title">
                                <div class="title-name">
                                    <img
                                        class="title-icon"
                                        src="../../img/icon_32理财.png"
                                        alt=" "
                                    />
                                    <span class="title-iconname">理财产品</span>
                                    <img
                                        class="title-more-icon"
                                        src="../../img/icon_youjtou.png"
                                        alt=""
                                    />
                                </div>
                                <p class="chosen-swiper-box-center">
                                    1万起投，稳投资
                                </p>
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
                        <div class="chosen-swiper-box">
                            <div class="chosen-swiper-box-title">
                                <div class="title-name">
                                    <img
                                        class="title-icon"
                                        src="../../img/icon_32理财.png"
                                        alt=" "
                                    />
                                    <span class="title-iconname">理财产品</span>
                                    <img
                                        class="title-more-icon"
                                        src="../../img/icon_youjtou.png"
                                        alt=""
                                    />
                                </div>
                                <p class="chosen-swiper-box-center">
                                    1万起投，稳投资
                                </p>
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
                    </div>
                </div>
                <div class="hotMore">
                    <div class="title">昆仑精选</div>
                    <div class="more">
                        更多
                        <i class="more-icon"
                            ><img src="../../img/icon_youjtou.png" alt=""
                        /></i>
                    </div>
                </div>
                <tabsCheck></tabsCheck>
                <div class="hotMore">
                    <div class="title">活动专区</div>
                    <div class="more">
                        更多
                        <i class="more-icon"
                            ><img src="../../img/icon_youjtou.png" alt=""
                        /></i>
                    </div>
                </div>
                <div class="my-footer-swipe">
                    <van-swipe :autoplay="2000" indicator-color="white">
                        <van-swipe-item>
                            <img src="../../img/banner01.png" alt="" />
                        </van-swipe-item>
                        <van-swipe-item>
                            <img src="../../img/banner02.png" alt="" />
                        </van-swipe-item>
                        <van-swipe-item>
                            <img src="../../img/banner01.png" alt="" />
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <Footer>
                    <img
                        class="footer-img"
                        src="../../img/水印_昆仑银行全程保障交易资金安全.png"
                        alt=""
                    />
                </Footer>
                <div>
                    <floatImg
                        class="floatImg"
                        @goNext="clickOpenImg"
                    ></floatImg>
                    <van-popup
                        class="popupImg"
                        v-model="show"
                        :closeable="true"
                        @close="clickClose"
                    >
                        <img src="../../img/广告图.png" alt="" />
                        <van-button
                            class="common-btn btn"
                            :round="true"
                            @click="clickOpen"
                            >立即参与</van-button
                        >
                    </van-popup>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import tabbar from '@/components/tabbar/index.vue'; //引用组件的地址
import { Button, Icon, Popup } from 'vant';
import tabsCheck from './klbCheck/index';
import floatImg from './floatImg/index';

@Component({
    components: {
        [Popup.name]: Popup,
        [Button.name]: Button,
        [Icon.name]: Icon,
        tabbar: tabbar,
        tabsCheck,
        floatImg,
    },
})
export default class Box extends Vue {
    private loading: boolean = true;
    private show: boolean = false;
    private created() {}
    private mounted() {}
    private handleLogin() {
        this.$router.push({
            path: 'login',
        });
    }
    private clickOpenImg() {
        this.show = true;
        console.log(123);
    }
    private clickClose() {}
    private clickOpen() {
        this.$router.push({
            path: 'active',
        });
    }
}
</script>

<style lang="stylus">
.box {
    .header {
        width: 100%;
        height: auto;
    }

    .box-header {
        display: flex;
        position: relative;

        .box-img {
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    }

    .header-logo {
        display: flex;
        position: absolute;
        left: 15px;
        top: 15px;
        justify-content: center;
        align-items: center;

        .header-logo-common {
            margin-left: 60px;
            font-family: PingFangSC-Medium, PingFang SC;
            color: rgba(255, 255, 255, 1);
            line-height: 22px;
            font-size: 16px;
            font-weight: bold;
        }

        .button-login {
            font-weight: bold;
            margin-left: 10px;
            width: 61px;
            height: 28px;
            padding: 5px;
            background: #FFE500;
            border-radius: 30px;
            text-align: center;
            font-size: 15px;
            line-height: 20px;
        }
    }

    .swipe-box {
        display: flex;
        width: 100%;
        position: absolute;
        top: 58px;
        left: 0;
        border-radius: 8px 8px 0 0;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;

        .main-box {
            width: 335px;

            // background: $back;
            .my-swipe {
                .van-swipe-item {
                    margin-top: 20px;
                    display: flex;
                    justify-content: center;

                    img {
                        width: 335px;
                        height: 84px;
                    }
                }
            }

            .hotMore {
                display: flex;
                width: 100%;
                margin-top: 30px;
                justify-content: space-between;
                flex-direction: row;

                .title {
                    font-size: 20px;
                    font-weight: bold;
                    color: rgba(51, 51, 51, 1);
                    line-height: 28px;
                }

                .more {
                    color: rgba(153, 153, 153, 1);
                    line-height: 37px;
                    font-size: 13px;

                    img {
                        width: 10px;
                        height: 10px;
                    }
                }
            }

            .chosen-container {
                overflow: auto;
            }

            .chosen-swiper {
                display: -moz-box; /* Firefox */
                display: -webkit-box; /* Safari,Opera,Chrome */
                display: box;

                .chosen-swiper-box {
                    position: relative;
                    display: block !important;
                    width: 265px;
                    height: 123px;
                    margin: 6px;
                    background: url('../../img/热销底图.png') no-repeat;
                    background-size: 265px 123px;
                    text-decoration: none;

                    .chosen-swiper-box-title {
                        margin: 0 10px 0 10px;

                        .title-name {
                            .title-icon {
                                position: absolute;
                                top: 6px;
                                width: 16px;
                                height: 16px;
                            }

                            .title-iconname {
                                position: absolute;
                                top: 8px;
                                left: 28px;
                                font-size: 13px;
                                font-weight: bold;
                                color: rgba(51, 51, 51, 1);
                            }
                        }

                        .title-more-icon {
                            position: absolute;
                            top: 10px;
                            right: 10px;
                            font-size: 0.26rem;
                            width: 10px;
                            height: 10px;
                        }

                        .chosen-swiper-box-center {
                            position: absolute;
                            top: 20px;
                            font-size: 15px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: bold;
                            color: rgba(51, 51, 51, 1);
                        }

                        .footer {
                            display: flex;
                            justify-content: space-between;
                            flex-direction: row;
                            font-size: 15px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: bold;
                            color: rgba(51, 51, 51, 1);
                            margin-top: 65px;

                            .footer-left {
                                width: 50%;
                                border-right: 1px solid rgba(200, 158, 124, 1);
                            }

                            .footer-left-num {
                                font-size: 20px;
                                font-family: PingFangSC-Semibold, PingFang SC;
                                font-weight: bold;
                                color: rgba(235, 62, 45, 1);
                                line-height: 26px;
                            }

                            .footer-left-wen {
                                font-size: 10px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: rgba(200, 158, 124, 1);
                                line-height: 26px;
                            }

                            .footer-rigth {
                                position: absolute;
                                right: 30px;

                                .footer-rigth-title {
                                    font-size: 18px;
                                    font-family: PingFangSC-Semibold, PingFang SC;
                                    font-weight: 600;
                                    color: rgba(51, 51, 51, 1);
                                    line-height: 25px;
                                }

                                .footer-rigth-title1 {
                                    font-size: 10px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: rgba(200, 158, 124, 1);
                                    line-height: 25px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .my-footer-swipe {
        .van-swipe-item {
            display: flex;
            margin-top: 15px;
            justify-content: center;

            img {
                width: 335px;
                height: 123px;
            }
        }
    }
    .popupImg{
        display: flex;
        width:295px;
        border-radius 10px
        img {
            width:295px;
            height:370px
        }
        .btn{
            position: absolute;
            top: 300px;
            left: 55px;
            width 200px
        }
    }
    .footer-img{
        width 209px
        height 50px
    }
    .floatImg{
        position:fixed;
        bottom 100px;
        right:0;
        z-index 9999
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
    }
}
</style>
