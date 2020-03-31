<template>
    <div class="box">
        <!-- <Header class="box-header">产品中心</Header> -->
        <div class="chosen-container">
            <div class="viewBg">
                <div class="view">
                    <div class="icon-box">
                        <div
                            class="icon-img"
                            v-for="(item, index) in imgUrl"
                            :key="index"
                            @click="handleImg(index)"
                        >
                            <div class="title-name">
                                <img
                                    class="title-icon"
                                    :src="item.imgInfo"
                                    alt=" "
                                />
                                <span class="title-iconname">{{
                                    item.name
                                }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="sortMenubg">
                        <div class="sortMenu">
                            <div
                                :class="
                                    activeAll === index ? 'active' : 'sortBtn'
                                "
                                v-for="(item, index) in sortDataList"
                                :key="index"
                                @click="clickActive(index)"
                            >
                                {{ item.name }}
                                <div class="iconBtn">
                                    <van-icon
                                        :name="
                                            flag === index && isShow
                                                ? 'arrow-up'
                                                : 'arrow-down'
                                        "
                                        :class="
                                            isShowBtn === index
                                                ? 'btn'
                                                : 'btnActive'
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-box">
            <div class="boxOne">
                <div class="hotMore">
                    <div class="title">银行理财</div>
                    <div class="more">
                        更多
                        <i class="more-icon"
                            ><img src="../../img/icon_youjtou.png" alt=""
                        /></i>
                    </div>
                </div>
                <div class="chosen-swiper-box-title">
                    <div class="title-img">
                        <img
                            class="title-icon"
                            src="../../img/tip_昆仑财富.png"
                            alt=" "
                        />
                        <span class="titleInfo"
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
                                245天期限 每周三起息
                            </div>
                            <div class="footer-rigth-title1">
                                1万起购 | 非工作日顺延
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chosen-swiper-box-title">
                    <div class="title-img">
                        <img
                            class="title-icon"
                            src="../../img/tip_昆仑财富.png"
                            alt=" "
                        />
                        <span class="titleInfo"
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
                                245天期限 每周三起息
                            </div>
                            <div class="footer-rigth-title1">
                                1万起购 | 非工作日顺延
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chosen-swiper-box-title">
                    <div class="title-img">
                        <img
                            class="title-icon"
                            src="../../img/tip_昆仑财富.png"
                            alt=" "
                        />
                        <span class="titleInfo"
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
                                245天期限 每周三起息
                            </div>
                            <div class="footer-rigth-title1">
                                1万起购 | 非工作日顺延
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="boxOne">
                <div class="hotMore">
                    <div class="title">大额存单</div>
                    <div class="more">
                        更多
                        <i class="more-icon"
                            ><img src="../../img/icon_youjtou.png" alt=""
                        /></i>
                    </div>
                </div>
                <div class="chosen-swiper-box-title">
                    <div class="title-img">
                        <img
                            class="title-icon"
                            src="../../img/tip_昆仑财富.png"
                            alt=" "
                        />
                        <span class="titleInfo"
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
                                245天期限 每周三起息
                            </div>
                            <div class="footer-rigth-title1">
                                1万起购 | 非工作日顺延
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chosen-swiper-box-title">
                    <div class="title-img">
                        <img
                            class="title-icon"
                            src="../../img/tip_昆仑财富.png"
                            alt=" "
                        />
                        <span class="titleInfo"
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
                                245天期限 每周三起息
                            </div>
                            <div class="footer-rigth-title1">
                                1万起购 | 非工作日顺延
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chosen-swiper-box-title">
                    <div class="title-img">
                        <img
                            class="title-icon"
                            src="../../img/tip_昆仑财富.png"
                            alt=" "
                        />
                        <span class="titleInfo"
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
                                245天期限 每周三起息
                            </div>
                            <div class="footer-rigth-title1">
                                1万起购 | 非工作日顺延
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="boxOne">
                <div class="hotMore">
                    <div class="title">财富计划</div>
                    <div class="more">
                        更多
                        <i class="more-icon"
                            ><img src="../../img/icon_youjtou.png" alt=""
                        /></i>
                    </div>
                </div>
                <div class="chosen-swiper-box-title">
                    <div class="title-img">
                        <img
                            class="title-icon"
                            src="../../img/tip_昆仑财富.png"
                            alt=" "
                        />
                        <span class="titleInfo"
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
                                245天期限 每周三起息
                            </div>
                            <div class="footer-rigth-title1">
                                1万起购 | 非工作日顺延
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chosen-swiper-box-title">
                    <div class="title-img">
                        <img
                            class="title-icon"
                            src="../../img/tip_昆仑财富.png"
                            alt=" "
                        />
                        <span class="titleInfo"
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
                                245天期限 每周三起息
                            </div>
                            <div class="footer-rigth-title1">
                                1万起购 | 非工作日顺延
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chosen-swiper-box-title">
                    <div class="title-img">
                        <img
                            class="title-icon"
                            src="../../img/tip_昆仑财富.png"
                            alt=" "
                        />
                        <span class="titleInfo"
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
                                245天期限 每周三起息
                            </div>
                            <div class="footer-rigth-title1">
                                1万起购 | 非工作日顺延
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-box">
            <img class="watermark" src="../../img/水印.png" alt="" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
export default class BankOnline extends Vue {
    private imgUrl: any = [
        {
            id: 1,
            name: '银行理财',
            imgInfo: require('../../assets/icon_64-01/理财@2x.png'),
        },
        {
            id: 2,
            name: '大额存单',
            imgInfo: require('../../assets/icon_64-01/大额存单@2x.png'),
        },
        {
            id: 3,
            name: '财富计划',
            imgInfo: require('../../assets/icon_64-01/P2B@2x.png'),
        },
        {
            id: 4,
            name: '加油支付',
            imgInfo: require('../../assets/icon_64-01/加油报务@2x.png'),
        },
        {
            id: 5,
            name: '油卡充值',
            imgInfo: require('../../assets/icon_64-01/油卡充值@2x.png'),
        },
        {
            id: 1,
            name: '昆仑宝',
            imgInfo: require('../../assets/icon_64-01/昆仑宝@2x.png'),
        },
        {
            id: 1,
            name: '银行贷款',
            imgInfo: require('../../assets/icon_64-01/银行贷款@2x.png'),
        },
        {
            id: 1,
            name: '信用卡服务',
            imgInfo: require('../../assets/icon_64-01/信用卡服务@2x.png'),
        },
        {
            id: 1,
            name: '充惠盈',
            imgInfo: require('../../assets/icon_64-01/充惠盈@2x.png'),
        },
        {
            id: 1,
            name: '付惠盈',
            imgInfo: require('../../assets/icon_64-01/付惠盈@2x.png'),
        },
    ];
    private sortDataList: any = [
        {
            id: 0,
            name: '综合排序',
            className: '',
            classNameActive: '',
        },
        {
            id: 1,
            name: '期限',
            className: '',
            classNameActive: '',
        },
        {
            id: 2,
            name: '金额',
            className: '',
            classNameActive: '',
        },
        {
            id: 3,
            name: '收益率',
            className: '',
            classNameActive: '',
        },
    ];
    private flag: number = 0;
    private activeAll: number = 0;
    private isShow: boolean = true;
    private isShowBtn: number = 0;

    private mounted() {
        sessionStorage.setItem('activeNumber', '0');
    }
    private clickActive(key: number) {
        switch (key) {
            case 0:
                this.isShow = !this.isShow;
                this.activeAll = 0;
                this.isShowBtn = 0;
                this.flag = 0;
                break;
            case 1:
                this.isShow = !this.isShow;
                this.activeAll = 1;
                this.isShowBtn = 1;
                this.flag = 1;
                break;
            case 2:
                this.isShow = !this.isShow;
                this.activeAll = 2;
                this.isShowBtn = 2;
                this.flag = 2;
                break;
            case 3:
                this.isShow = !this.isShow;
                this.activeAll = 3;
                this.isShowBtn = 3;
                this.flag = 3;
                break;

            default:
                break;
        }
    }
    private handleImg(key: number) {
        switch (key) {
            case 0:
                this.$router.push({
                    path: '/bankManage',
                });
                break;
            case 2:
                this.$router.push({
                    path: '/wealthPlan',
                });
                break;

            default:
                break;
        }
    }
}
</script>

<style lang="stylus">
.box{
    width 100%
    background:rgba(255,255,255,1);
    .chosen-container {
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
        .viewBg{
            .view {
                position:fixed;
                top:0px;
                left:0;
                right:0;
                z-index 9999
                margin 0 auto
                background:rgba(255,255,255,1);
                box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
                .icon-box{
                    display: flex;/* 设置布局类型 */
                    width: 100%;/* 设置宽度 */
                    flex-wrap: nowrap;/* 不换行 */
                    overflow-x: auto;/* 超出宽度滑动 */
                    padding 5px 15px 0 15px
                    .icon-img{
                        margin: 0px 10px 0 0;/* 设置左右距离 */
                        flex-shrink:0;/* 设置宽度 */
                        .title-name{
                            display flex
                            justify-content: center;
                            align-items: center;
                            flex-direction: column
                            margin: 0px 20px 0 0;
                            .title-icon{
                                margin: 0px 0 8px 0;
                                width 32px
                                height 32px
                            }
                            .title-iconname{
                                font-size:12px;
                                font-family:PingFangSC-Regular,PingFang SC;
                                font-weight:400;
                                color:rgba(51,51,51,1);
                                line-height:16px;
                            }
                        }
                    }
                }
                .sortMenubg {
                    background:rgba(250,250,250,1)
                    .sortMenu{
                        display flex
                        width 335px
                        margin 0 auto
                        margin-top 15px
                        align-items: center;
                        justify-content: space-between;
                        .sortBtn{
                            display flex
                            width 250px
                            height 40px
                            justify-content: center;
                            align-items: center;
                            font-size:14px;
                            font-family:PingFangSC-Medium,PingFang SC;
                            font-weight:500;
                            color:rgba(102,102,102,1);
                            line-height:35px;
                            .iconBtn{
                                display flex
                                width 20px
                                justify-content: center;
                                align-items: center;
                                flex-direction: column
                            }
                        }
                        .active {
                            display flex
                            width 250px
                            height 40px
                            justify-content: center;
                            align-items: center;
                            font-size:14px;
                            font-family:PingFangSC-Medium,PingFang SC;
                            font-weight:500;
                            line-height:18px;
                            color: red
                            .iconBtn{
                                display flex
                                width 20px
                                justify-content: center;
                                align-items: center;
                                // flex-direction: column
                                color:rgba(102,102,102,1);
                            }
                        }
                        .btn{
                            display flex
                            width 20px
                            color: red;
                            justify-content: center;
                            align-items: center;
                            // flex-direction: column
                        }
                        .btnActive{
                            display flex
                            width 20px
                            justify-content: center;
                            align-items: center;
                            // flex-direction: column
                        }
                    }
                }
            }
        }
    }
    .product-box {
        background:rgba(255,255,255,1);
        margin-top 110px
        .boxOne{
            margin-top 10px
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
            padding 15px
            .hotMore {
                display: flex;
                width 335px
                margin 0 auto
                justify-content: space-between;
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

            .chosen-swiper-box-title {
                background:rgba(250,250,250,1);
                border-radius:10px;
                height 109px
                padding 10px
                margin-top 15px
                .title-img {
                    display flex
                    .title-icon{
                        width: 59px;
                        height: 18px;
                    }
                    .titleInfo{
                        width 225px;
                        font-size: 13px;
                        font-weight: bold;
                        line-height 20px
                        margin-left 15px
                        color: rgba(51, 51, 51, 1);
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;

                    }
                }
                .footer{
                    display: flex;
                    justify-content: space-between;
                    flex-direction: row;
                    font-size 15px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:bold;
                    color:rgba(51,51,51,1);
                    margin-top: 20px;
                    line-height 25px
                    .footer-left{
                        width 45%
                        border-right:1px solid rgba(200,158,124,1);
                        margin-bottom: 15px
                    }
                    .footer-left-num{
                        font-size:20px;
                        font-family:PingFangSC-Semibold,PingFang SC;
                        font-weight:bold;
                        color:rgba(235,62,45,1);
                        line-height 35px
                    }
                    .footer-left-wen{
                        font-size:10px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(200,158,124,1);
                        line-height 20px
                    }
                    .footer-rigth {
                        .footer-rigth-title{
                            font-size:16px;
                            font-family:PingFangSC-Semibold,PingFang SC;
                            font-weight:600;
                            color:rgba(51,51,51,1);
                            line-height:30px;
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
    }
    .footer-box{
        display: flex;
        bottom: 20px;
        height: 120px;
        background $back;
        margin-top 15px
        padding 15px
        justify-content: center;
        .watermark{
            width 325px
            height 32px
        }

    }
}
</style>
