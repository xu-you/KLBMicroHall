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
                            <div class="prductInfo">
                                <div class="prductInfo-left">
                                    <div class="prductInfo-left-num txtTitle">
                                        {{ item.lixi }}
                                    </div>
                                    <div class="prductInfo-left-wen">
                                        {{ item.lixi1 }}
                                    </div>
                                </div>
                                <div class="prductInfo-left">
                                    <div class="prductInfo-left-num">
                                        {{ item.title1 }}
                                    </div>
                                    <div class="prductInfo-left-wen">
                                        {{ item.xinxi1 }}
                                    </div>
                                </div>
                                <div class="prductInfo-left">
                                    <div class="prductInfo-left-num">
                                        {{ item.title2 }}
                                    </div>
                                    <div class="prductInfo-left-wen">
                                        {{ item.xinxi2 }}
                                    </div>
                                </div>
                                <div class="prductInfo-left txtTitleBorder">
                                    <div class="prductInfo-left-num">
                                        {{ item.title3 }}
                                    </div>
                                    <div class="prductInfo-left-wen">
                                        {{ item.xinxi3 }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <van-divider :hairline="false" />
                        <div class="payAccount">
                            <div class="payMay">
                                <div>电子账户:</div>
                                <div>0000 0000 0000 0000 000 妺妺六</div>
                            </div>
                            <div class="payMay">
                                <div>电子账户可用余额(元):</div>
                                <div>300,000,000.00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pay">
                    <div class="payTitle">买入金额</div>
                    <van-cell-group>
                        <div class="payNumber">
                            <span class="payFlag">￥</span>
                            <van-field
                                v-model="value"
                                placeholder="1万起购金额"
                            />
                        </div>
                        <div class="payNumber">
                            <span class="payPopal">推荐人(非必填):</span>
                            <van-field
                                class="payfield"
                                placeholder="请输入手机号"
                                v-model="text"
                                type="digit"
                            />
                        </div>
                    </van-cell-group>
                </div>
                <div class="pay">
                    <div class="payTitle">购买方式</div>
                    <van-radio-group v-model="radio">
                        <van-radio name="1" class="radioHeigth">
                            <div class="payTitle_one">电子账户余额</div>
                            <div class="payTitle_oneDown">
                                当前可用
                                <span style="color:red">300000.00</span> 元
                            </div>
                        </van-radio>
                        <van-divider :hairline="false" />
                        <van-radio name="2" class="radioHeigth">
                            <div class="payTitle_one">油鑫宝余额</div>
                            <div class="payTitle_oneDown">
                                当前可用
                                <span style="color:red">100000.00</span>元
                            </div>
                        </van-radio>
                    </van-radio-group>
                </div>
            </div>
            <div class="footer">
                <div class="footer-main">
                    <img
                        class="footer-img"
                        src="../../../img/安全提示footer.png"
                        alt=""
                    />
                </div>
                <div>
                    <div class="radioCell">
                        <van-radio-group v-model="radio">
                            <van-radio name="1" shape="square"> </van-radio>
                        </van-radio-group>
                        <van-cell
                            title="同意服务相关协议"
                            is-link
                            arrow-direction="up"
                            @click="clickArrowDown"
                        />
                    </div>
                    <van-popup
                        v-model="show"
                        position="bottom"
                        :style="{ height: '30%' }"
                    >
                        <van-cell title="理财销售协议" is-link to="index" />
                        <van-cell title="理财销售协议" is-link to="index" />
                        <van-cell title="理财销售协议" is-link to="index" />
                    </van-popup>
                </div>

                <div style="height:50px"></div>
            </div>
        </div>
        <van-popup
            v-model="payShow"
            class="popup"
            closeable
            :close-on-click-overlay="false"
            @close="handleCloseAble"
        >
            <div class="title">请输入交易密码</div>
            <div class="sub-title">向优途钱包充值</div>
            <div class="recharge-num">￥{{ value | moneyFormatter }}</div>
            <grid @change="recharge" :show="payShow" />
        </van-popup>
        <div class="footer_btn_box" v-if="vanBtn">
            <van-button class="footer_btn btn_color" @click="clickIvestment"
                >立即投资</van-button
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
    Cell,
    CellGroup,
    Divider,
    Field,
    Col,
    Row,
    RadioGroup,
    Radio,
    Popup,
} from 'vant';
import VeLine from 'v-charts/lib/line.common';
import Grid from '@/components/SafeKeyboard/Grid';

@Component({
    components: {
        [VeLine.name]: VeLine,
        [CellGroup.name]: CellGroup,
        [Cell.name]: Cell,
        [Field.name]: Field,
        [Divider.name]: Divider,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio,
        [Col.name]: Col,
        [Row.name]: Row,
        [Popup.name]: Popup,
        Grid,
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
            title1: '1万',
            xinxi1: '起购金额',
            title2: '无固定期限',
            xinxi2: '理财期限',
            title3: '低风险',
            xinxi3: '风险等级',
        },
    ];
    private chartData: any = {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [{ 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 }],
    };
    private hoverColor: boolean = true;
    private show: boolean = false;
    private payShow: boolean = false;
    private vanBtn: boolean = true;
    private hackReset: boolean = true;
    private local: boolean = false;
    private value: string = '';
    private text: string = '';
    private radio: string = '1';
    private hoverColorRigth: boolean = false;
    private hoverColorCenter: boolean = false;
    private mounted() {}

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
    private clickArrowDown() {
        this.show = true;
    }
    private clickIvestment() {
        this.payShow = true;
        this.vanBtn = false;
    }
    private recharge(pwd: string) {
        // this.fullLoading = true;
        console.log(pwd);
        if (pwd) {
            this.payShow = false;
        }
    }
    private handleCloseAble() {
        this.vanBtn = true;
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
        .onlineFinac{
            width 375px
            margin 0 auto
            padding 15px
            display: flex; // 关键， flex布局
            flex-direction: column;
            margin-top 35px;
            background:rgba(250,250,250,1);
            .chosen-onlineFinac{
                .chosen-swiper-box-title {
                    border-radius:10px;
                    // padding 10px
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
                    .prductInfo{
                        display: flex;
                        font-size 15px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:bold;
                        margin-top 15px
                        .prductInfo-left{
                            display: flex;
                            flex-direction: column;
                            width 100px
                            border-right:1px solid #E3E3E3;
                            .prductInfo-left-num{
                                font-size:16px;
                                font-family:PingFangSC-Semibold,PingFang SC;
                                font-weight:bold;
                                line-height 20px
                                text-align center
                            }
                            .txtTitle{
                                color #EB3E2D;
                            }
                            .prductInfo-left-wen{
                                font-size:10px;
                                font-family:PingFangSC-Regular,PingFang SC;
                                font-weight:400;
                                color:rgba(153,153,153,1);
                                line-height 20px
                                text-align center
                            }
                        }
                        .txtTitleBorder{
                            border-right 1px solid #fff
                        }
                    }
                }
            }
        }
        .tabs-section{
            display flex
            line-height: 35px;
            font-size 14px
            margin 0 auto
            justify-content: space-between;
            .tabs-title-color{
                color:rgba(136,136,136,1);
            }
        }
        .account-box{
            background #fafafa !important
        }
        .payAccount{
            line-height: 35px;
            font-size 14px
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(153,153,153,1);
            .payMay{
                display flex
                justify-content: space-between
                flex-direction columns
            }
        }
        .pay{
            padding 15px
            background #000
            // height 170px
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
            margin-top 5px
            .payTitle{
                padding 15px 15px 15px 0
            }
            .payNumber{
                display flex
                justify-content: space-between
                flex-direction columns
                .payFlag{
                    text-align center
                    height 40px
                    font-size 28px
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:37px;
                }
                .payPopal{
                    text-align center
                    width 115px
                    font-size 16px
                    height 40px
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:37px;
                }
                .payfield{
                    width 230px
                }
            }
        }
        .radioHeigth{
            height 50px
        }
        .payTitle_one{
            text-align center
            // width 115px
            font-size 16px
            // height 40px
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:30px;
        }
        .payTitle_oneDown{
            font-size:12px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(153,153,153,1);
            // line-height:20px;
        }
    }
    .footer {
        .footer-main {
            display: flex;
            height: 100px;
            justify-content: center;
            align-items center
            .footer-img{
                width 300px
            }
        }
        .radioCell{
            background rgba(255,255,255,1)
            padding 0 0px 5px 15px
            display flex
            align-items center
            justify-content center
        }
    }

}
.footer_btn_box{
    padding 5px
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    z-index 9999
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
    background #fff
    display flex
    align-items center
    justify-content center
}
.popup {
    width: 70%;
    height: 40%;
    top: 34%;
    border-radius: 6px;
    font-size: 14px;
    text-align: center;
    padding: 20px 0;
    overflow: hidden;
    .sub-title {
        margin-top: 20px;
    }

    .recharge-num {
        font-size: 22px;
        font-weight: bold;
        margin-top: 20px;
    }

    .recharge-way {
        height: 30px;
        line-height: 30px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        margin: 20px 20px;
        border-top: 1px solid #f2f2f2;
    }
}
</style>
