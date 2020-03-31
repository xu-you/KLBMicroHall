<template>
    <div class="wealthPlan">
        <Header>财富计划</Header>
        <div class="header_box">
            <img
                src="../../../img/实用财富计划_底图.png"
                alt=""
                style="height: 150px"
            />
            <div class="wealthPlanSearch">
                <div class="wealthPlanSearch_title_box">
                    <div class="wealthPlanSearch_title">
                        一分钟了解 实用财富计划
                    </div>
                    <div class="vanBtn">了解一下</div>
                </div>
                <van-cell title="风险评估" icon="shop-o" class="vanCellBg">
                    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                    <template #right-icon>
                        <van-icon name="arrow" style="line-height: inherit;" />
                    </template>
                </van-cell>
            </div>
        </div>
        <div class="tabs-box">
            <van-tabs v-model="tabActive" line-width="30px" @click="clickTabs">
                <van-tab
                    v-for="(item, index) in titleList"
                    :title="item.name"
                    :key="index"
                >
                </van-tab>
            </van-tabs>
            <div class="funcContent">
                <div class="sortMenubg" v-if="onlineFlag">
                    <div class="sortMenu">
                        <div
                            :class="activeAll === index ? 'active' : 'sortBtn'"
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
        <div class="contentArea">
            <div class="contentArea_tab">
                <div class="title-img">
                    <img
                        class="title-icon"
                        src="../../../img/tip可转让.png"
                        alt=" "
                    />
                    <span class="titleInfo">财富计划 KLB20200263</span>
                </div>
                <ul class="edInfo">
                    <li class="edInfoItem">
                        <div class="edInfoItemTitle">4.5%</div>
                        <span class="edInfoSpan">预期年化收益率</span>
                        <div class="lineRight"></div>
                    </li>
                    <li class="edInfoItem">
                        <div class="edInfoItemTitle">215天</div>
                        <span class="edInfoSpan">产品期限</span>
                        <div class="lineRight"></div>
                    </li>
                    <li class="edInfoItem">
                        <div class="edInfoItemTitle">100.00元</div>
                        <span class="edInfoSpan">起存金额</span>
                    </li>
                </ul>
                <van-divider :hairline="false" />
                <div class="time-box">
                    <div class="edInfoSpan ">
                        2020.02.05-2020.05.05
                    </div>
                    <div class="time_limit">
                        <span class="edInfoSpan time_limit_title"
                            >剩余额度：</span
                        >
                        <van-progress
                            :percentage="50"
                            :show-pivot="false"
                            style="width:80px"
                        />
                        <span class="edInfoSpan">{{ '50%' }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-box">
            <img
                class="footer-img"
                src="../../../img/水印_昆仑银行全程保障交易资金安全.png"
                alt=""
            />
        </div>
        <div style="margin-bottom:60px"></div>
        <div class="footer_btn_box">
            <van-tabbar
                v-model="ButtonTabActive"
                inactive-color="#999999"
                active-color="#EB3E2D"
            >
                <van-tabbar-item
                    v-for="(item, index) in tabbars"
                    :key="index"
                    :to="item.name"
                >
                    <span>{{ item.title }}</span>
                    <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.tabActive ? item.tabActive : item.normal"
                    />
                </van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Col, Row, Cell, CellGroup, Button, Sticky, Progress } from 'vant';

@Component({
    components: {
        [Button.name]: Button,
        [Sticky.name]: Sticky,
        [Cell.name]: Cell,
        [Col.name]: Col,
        [Row.name]: Row,
        [CellGroup.name]: CellGroup,
        [Progress.name]: Progress,
    },
})
export default class BankManage extends Vue {
    private container: any = null;
    private active: number = 0;
    private tabActive: number = 0;
    private flag: number = 0;
    private activeAll: number = 0;
    private isShow: boolean = true;
    private onlineFlag: boolean = true;
    private holdFlag: boolean = false;
    private entrustFlag: boolean = false;
    private value: string = '';
    private needFixed: boolean = false;
    private isShowBtn: number = 0;
    private titleList: any = [
        { id: '0', name: '投资区' },
        { id: '1', name: '转让区' },
    ];
    private ButtonTabActive: number = 0;
    private created() {
        if (this.$route.name == 'wealthPlan') {
            this.ButtonTabActive = 0;
        } else if (this.$route.name == 'myInvestment') {
            this.ButtonTabActive = 1;
        }
    }
    private tabbars: any = [
        {
            name: 'wealthPlan',
            title: '在销产品',
            ButtonTabActive: require('../../../img/icon_tabber_40首页_n.png'),
            normal: require('../../../img/icon_tabber_40首页_h.png'),
        },
        {
            name: 'myInvestment',
            title: '我的投资',
            ButtonTabActive: require('../../../img/icon_tabber_40我的_h.png'),
            normal: require('../../../img/icon_tabber_40我的_n.png'),
        },
    ];
    private sortDataList: any[] = [
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
            id: 3,
            name: '收益率',
            className: '',
            classNameActive: '',
        },
    ];
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
        {
            id: 1,
            imgTile:
                '油钱赚系列开放式非净值型理财产油钱赚系列开放式非净值型理财产',
            lixi: '3.40%',
            lixi1: '七日年化收益',
            nili: '245天期限 每周三起息',
            nili1: '1万起购 | 非工作日顺延',
        },
        {
            id: 1,
            imgTile:
                '油钱赚系列开放式非净值型理财产油钱赚系列开放式非净值型理财产',
            lixi: '3.40%',
            lixi1: '七日年化收益',
            nili: '245天期限 每周三起息',
            nili1: '1万起购 | 非工作日顺延',
        },
        {
            id: 1,
            imgTile:
                '油钱赚系列开放式非净值型理财产油钱赚系列开放式非净值型理财产',
            lixi: '3.40%',
            lixi1: '七日年化收益',
            nili: '245天期限 每周三起息',
            nili1: '1万起购 | 非工作日顺延',
        },
        {
            id: 1,
            imgTile:
                '油钱赚系列开放式非净值型理财产油钱赚系列开放式非净值型理财产',
            lixi: '3.40%',
            lixi1: '七日年化收益',
            nili: '245天期限 每周三起息',
            nili1: '1万起购 | 非工作日顺延',
        },
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
    private mounted() {
        this.container = this.$refs.container;
        this.tabActive = Number(sessionStorage.getItem('activeNumber'));
        switch (this.tabActive) {
            case 0:
                this.tabActive = this.tabActive;
                this.onlineFlag = true;
                this.holdFlag = false;
                this.entrustFlag = false;
                break;
            case 1:
                this.tabActive = this.tabActive;
                this.onlineFlag = false;
                this.holdFlag = true;
                this.entrustFlag = false;
                break;
            case 2:
                this.tabActive = this.tabActive;
                this.onlineFlag = false;
                this.holdFlag = false;
                this.entrustFlag = true;
                break;

            default:
                break;
        }
    }
    private clickActiveTabs() {
        sessionStorage.setItem('activeNumber', this.tabActive);
    }
    private handleOnlineList() {
        this.$router.push({
            path: '/bankOnline',
            query: {},
        });
    }
    private handleClickDetails(): void {
        this.$router.push({
            path: '/bankManageDetails',
            query: {
                active: '2',
            },
        });
    }
    private handleClickQueryProduct(): void {
        this.$router.push({
            path: '/queryProductTime',
        });
    }
    private clickTabs(val: number): void {
        sessionStorage.setItem('activeNumber', this.tabActive);
        switch (val) {
            case 0:
                this.tabActive = val;
                this.onlineFlag = true;
                this.holdFlag = false;
                this.entrustFlag = false;
                break;
            case 1:
                this.tabActive = val;
                this.onlineFlag = false;
                this.holdFlag = true;
                this.entrustFlag = false;
                break;
            case 2:
                this.tabActive = val;
                this.onlineFlag = false;
                this.holdFlag = false;
                this.entrustFlag = true;
                break;

            default:
                break;
        }
    }
}
</script>

<style lang="stylus" scoped>
.wealthPlan{
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .header_box{
        height 150px
        margin-top 45px
        .wealthPlanSearch{
            width 335px
            height 130px
            display flex
            flex-direction: column;
            justify-content: center;
            z-index 999
            margin -150px auto
            .wealthPlanSearch_title_box{
                display flex
                flex-direction: column;
                align-items: center;
                .wealthPlanSearch_title{
                    font-size:20px;
                    font-family:PingFangSC-Medium,PingFang SC;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:28px;
                }
                .vanBtn{
                    margin 10px
                    width:90px;
                    height:28px;
                    text-align center
                    line-height 28px
                    z-index 999
                    border-radius:22px;
                    font-size 12px
                    color rgba(255,255,255,1)
                    border 1px solid rgba(255,255,255,1);
                }
                .vanBtn:hover{
                    background rgba(0,0,0,1)
                    opacity:0.3;
                }

            }
            .vanCellBg{
                z-index 999
                color: #FFFFFF
                background-color: rgba(0,0,1,.29);
                border-radius:10px;
            }
        }
    }


    .tabs-box{
        position: sticky;
        top: 40px;
        z-index 999
        background rgba(242,242,242,1)
        .funcContent{
            margin-top 2px
        }
        .tabs-title{
            width 335px
            height 50px
            margin 0 auto
            display flex
            justify-content space-around
            align-items center
            font-size:15px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:21px;
        }
        .sortMenubg {
            background:rgba(242,242,242,1);
            height 40px
            .sortMenu{
                display flex
                width 335px
                margin 0 auto
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
                        color:rgba(102,102,102,1);
                    }
                }
                .btn{
                    display flex
                    width 20px
                    color: red;
                    justify-content: center;
                    align-items: center;
                }
                .btnActive{
                    display flex
                    width 20px
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
    .contentArea{
        flex 1
        .contentArea_tab{
            display: flex;
            width 335px
            margin 15px auto
            flex-direction: column;
            background:rgba(250,250,250,1);
            background-image url('../../../img/img已售罄.png');
            background-repeat: no-repeat;
            background-size: 63px 55px;
            background-position: 260px 15px;
            .title-img {
                display: flex;
                padding 15px 15px 0 15px;
                .title-icon{
                    width: 48px;
                    height: 19px;
                }
                .titleInfo{
                    font-size: 13px;
                    font-weight: bold;
                    line-height 20px
                    margin-left 10px
                    color: rgba(51, 51, 51, 1);
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
            }
            .edInfo{
                width 335px
                z-index 999
                display: flex;
                justify-items center
                align-items center
                padding 10px 10px 0 10px
                border-radius:10px;
                font-size:16px;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:rgba(51,51,51,1);
                line-height:23px;
                .edInfoItem{
                    justify-items center;
                    align-items center;
                    text-align center;
                    line-height 23px;
                    width 200px;
                    margin 5px;
                    .edInfoItemTitle{
                        font-size:20px;
                        font-weight:600;
                        color:rgba(153,153,153,1);
                        line-height:28px;
                    }
                    .lineRight {
                        float:right;
                        width: 1px;
                        height: 30px;
                        background: rgba(227,227,227,1);
                        margin-top -10px
                    }
                }
            }
            .time-box{
                display flex
                justify-content: center;
                padding 0 0 10px 0
                .time_limit{
                    display flex
                    justify-content: space-between;
                    align-items center
                    margin-left 10px
                }
            }
        }
    .edInfoSpan{
        font-size:11px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color rgba(153,153,153,1);
        line-height:25px;
    }
    }
    .van-divider{
        margin 5px auto
        width 305px
    }
    .footer-box{
        display: flex;
        height: 80px;
        // background $back;
        // margin-top 15px
        align-items center
        justify-content: center;
        .footer-img{
            width 230px
            // margin-bottom 140px
        }
    }
    .footer_btn_box{
        display flex
        justify-content: center;
        padding 15px
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        z-index 9999
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
        background #fff
        .productBtn{
            width 50%
            font-size:15px;
            font-weight:500;
            color:rgba(235,62,45,1);
            line-height:21px;
        }
        .myInvest{
            font-size:15px;
            font-weight:500;
            line-height:21px;
        }
    }
}
</style>
