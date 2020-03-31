<template>
    <div>
        <Header>理财详情信息</Header>
        <div class="bankOnline">
            <div class="region">
                <div class="onlineFinac">
                    <div
                        class="chosen-onlineFinac"
                        v-for="(item, index) in onlineList"
                        :key="index"
                    >
                        <div class="chosen-swiper-box-title">
                            <div class="title-img">
                                <img
                                    class="title-icon"
                                    src="../../../img/tip_昆仑财富.png"
                                    alt=" "
                                />
                                <span class="titleInfo">{{
                                    item.imgTile
                                }}</span>
                            </div>
                            <div class="footer">
                                <div class="footer-left">
                                    <div class="footer-left-num">
                                        {{ item.lixi }}
                                    </div>
                                    <div class="footer-left-wen">
                                        {{ item.lixi1 }}
                                    </div>
                                </div>
                                <div class="footer-rigth">
                                    <div class="footer-rigth-title">
                                        {{ item.nili }}
                                    </div>
                                    <div class="footer-rigth-title1">
                                        {{ item.nili1 }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="edInfo">
                        <li class="edInfoItem">
                            <div>1万</div>
                            <span class="edInfoSpan">起购金额</span>
                            <div class="lineRight"></div>
                        </li>
                        <li class="edInfoItem">
                            <div>固定定期限</div>
                            <span class="edInfoSpan">理财期限</span>
                            <div class="lineRight"></div>
                        </li>
                        <li class="edInfoItem">
                            <div>低风险</div>
                            <span class="edInfoSpan">风险等级</span>
                        </li>
                    </ul>
                </div>
                <div class="line-box">
                    <div class="title-box">
                        <div class="title-info">本期购买截止 2020.02.12</div>
                        <div class="title-info">现金管理类</div>
                    </div>
                    <ve-line
                        :data="chartData"
                        :tooltip-visible="false"
                        :legend-visible="false"
                        :judge-width="true"
                        height="300px"
                    >
                    </ve-line>
                    <div class="queryBtn">
                        <van-button
                            :class="{
                                btn: true,
                                btnRoundleft: true,
                                hoverColor: hoverColor,
                            }"
                            @click="handleClickColor('0')"
                        >
                            近三月
                        </van-button>
                        <van-button
                            :class="{ btn: true, hoverColor: hoverColorCenter }"
                            @click="handleClickColor('1')"
                        >
                            近一月
                        </van-button>
                        <van-button
                            :class="{
                                btn: true,
                                btnRoundRigth: true,
                                hoverColor: hoverColorRigth,
                            }"
                            @click="handleClickColor('2')"
                        >
                            近七月
                        </van-button>
                    </div>
                </div>

                <div class="chosen-tabs">
                    <div class="title-18">产品详情信息</div>
                    <div class="tabs-section">
                        <div class="tabs-title-color">委托金额(元):</div>
                        <div>10,000.00</div>
                    </div>
                    <div class="tabs-section">
                        <div class="tabs-title-color">委托份额:</div>
                        <div>0</div>
                    </div>
                    <div class="tabs-section">
                        <div class="tabs-title-color">币种:</div>
                        <div>人民币</div>
                    </div>
                    <van-divider />
                    <div class="tabs-section">
                        <div class="tabs-title-color">申请状态:</div>
                        <div>确认成功</div>
                    </div>
                    <div class="tabs-section">
                        <div class="tabs-title-color">委托日期:</div>
                        <div>2020.10.01</div>
                    </div>
                    <div class="tabs-section">
                        <div class="tabs-title-color">交易类型:</div>
                        <div>理财产品购买</div>
                    </div>
                    <div class="tabs-section">
                        <div class="tabs-title-color">流水号:</div>
                        <div>0000 0000 0000 0000</div>
                    </div>
                </div>
                <div class="onlineArgeen">
                    <div class="title-18 paddingRigth">产品相关协议</div>
                    <van-cell title="权益须知" is-link to="index" />
                    <van-cell title="理财销售协议" is-link to="index" />
                    <van-cell
                        title="理财产品说明书及风险揭示书"
                        is-link
                        to="index"
                    />
                </div>
            </div>
            <Footer>
                <img
                    class="footer-img"
                    src="../../../img/水印_昆仑银行全程保障交易资金安全.png"
                    alt=""
                />
            </Footer>
        </div>
        <div class="footer_btn_box">
            <div>分享</div>
            <van-button class="footer_btn btn_color" @click="clickInvestment"
                >立即投资</van-button
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Cell, CellGroup } from 'vant';
import VeLine from 'v-charts/lib/line.common';

@Component({
    components: {
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [VeLine.name]: VeLine,
    },
})
export default class BankOnline extends Vue {
    private onlineList: any[] = [
        {
            id: 1,
            imgTile:
                '油钱赚系列开放式非净值型理财产油钱赚系列开放式非净值型理财产',
            lixi: '3.40%',
            lixi1: '七日年化收益',
            nili: '245天期限 每周三起息',
            nili1: '1万起购 | 非工作日顺延',
        },
    ];
    private chartData: any = {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [{ 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 }],
    };
    private hoverColor: boolean = true;
    private show: boolean = false;
    private hoverColorRigth: boolean = false;
    private hoverColorCenter: boolean = false;
    private handleClickColor(val: string) {
        console.log(val);
        switch (val) {
            case '0':
                this.hoverColor = true;
                this.hoverColorRigth = false;
                this.hoverColorCenter = false;
                break;
            case '1':
                this.hoverColor = false;
                this.hoverColorRigth = false;
                this.hoverColorCenter = true;
                break;
            case '2':
                this.hoverColorRigth = true;
                this.hoverColorCenter = false;
                this.hoverColor = false;
                break;

            default:
                break;
        }
    }
    private clickInvestment() {
        this.$router.push('/investment');
    }
}
</script>

<style lang="stylus" scoped>
.bankOnline{
    display: -webkit-flex;
    display: flex; // 关键， flex布局
    flex-direction: column; // 关键，三块主题column摆放。
    height: 100vh; // 关键，设置高度为可见高度的100%；
    .region{
        flex 1
    }
    .line-box{
        height 353px
        padding 15px
        background:rgba(250,250,250,1);

        .title-box{
            display flex
            align-items: center;
            justify-content: space-between;

        }
    }
    .chosen-tabs {
        margin 2px auto
        padding 20px
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        background #ffffff;
        font-size 15px
        color rgba(51,51,51,1);
        .title-color{
            font-size:18px;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:rgba(51,51,51,1);
            line-height:30px;
        }
        .btnColor{
            width:84px;
            height:30px;
            background:rgba(224,243,255,1);
            border-radius:15px;
            line-height 30px;
            text-align:center;
            color #1292E2
        }
        .tabs-title{
            width 100%
            display flex
            justify-content: space-between;
        }
        .tabs-section{
            width 100%
            display flex
            line-height: 35px;
            align-items: center;
            justify-content: space-between;
            .tabs-title-color{
                color:rgba(136,136,136,1);
            }
        }
    }
    .onlineArgeen{
        margin 8px auto
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        background #ffffff;
        font-size 15px
        color rgba(51,51,51,1);
        .paddingRigth{
            margin-left 20px
        }
    }
    .queryBtn{
        z-index 9999
        display flex
        justify-content: center;

        margin-top  -50px
        .btn{
            font-size:12px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(153,153,153,1);
            line-height:25px;
            text-align center
            background:rgba(242,242,242,1);
            width 70px;
            height 30px;
            margin 0.5px
        }
        .btnRoundleft{
            border-radius 20px 0px 0px 20px;
        }
        .btnRoundRigth{
            border-radius 0px 20px 20px 00px;
        }
        .hoverColor{
            background:rgba(235,62,45,1);
            color:rgba(255,255,255,1);
        }
    }
    .onlineFinac{
            display: flex; // 关键， flex布局
            flex-direction: column; // 关键，三块主题column摆放。
            margin-top 35px;
            background:rgba(250,250,250,1);
            .chosen-onlineFinac{
                width 335px
                margin 0 auto
                flex: 1; // 关键， 填充剩余空间
                .van-search{
                    width:335px;
                    margin 0 auto
                }
                .van-search__content{
                    background-color: #fff
                }
                .chosen-swiper-box-title {
                    // background:rgba(250,250,250,1);
                    border-radius:10px;
                    height 109px
                    padding 10px
                    margin-top 10px
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
    .edInfo{
        display: flex;
        justify-items center
        width 335px
        padding 10px
        box-shadow:0px 0px 10px 0px rgba(0,0,0,0.1);
        border-radius:10px;
        margin 0 auto
        font-size:16px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(51,51,51,1);
        line-height:23px;
        background:rgba(250,250,250,1);
        .edInfoItem{
            justify-items center;
            align-items center;
            text-align center;
            line-height 23px;
            width 200px;
            margin 5px;
            .lineRight {
                float:right;
                width: 1px;
                height: 30px;
                background: rgba(227,227,227,1);
                margin-top -10px
            }
        }
    }
    .edInfoSpan{
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color rgba(153,153,153,1);
        line-height:25px;
   }
    .footer-img{
        width 209px
        height 50px
    }

}
    .footer_btn_box{
        background pink
        position:fixed;
        bottom:0;
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
    }
</style>
