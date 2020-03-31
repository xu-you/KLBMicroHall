<template>
    <div class="bankManage">
        <Header>银行理财</Header>
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
                <div class="chosen-box" v-if="holdFlag">
                    <van-search
                        v-model="value"
                        shape="round"
                        background="#F2F2F2"
                        placeholder="搜索产品类别"
                    />
                </div>
                <div v-if="entrustFlag">
                    <div class="chosen-box">
                        <van-search
                            v-model="value"
                            shape="round"
                            background="#F2F2F2"
                            placeholder="搜索产品类别"
                            @click="handleClickQueryProduct"
                        />
                    </div>
                    <div class="chosen-tabs" @click="handleClickDetails">
                        <div class="tabs-section">
                            <div>2020年10月01日</div>
                            <div class="btnColor">确认成功</div>
                        </div>
                        <van-divider />
                        <div class="tabs-section">
                            <div class="tabs-title-color">产品代码:</div>
                            <div>KLB01</div>
                        </div>
                        <div class="tabs-section">
                            <div class="tabs-title-color">产品名称:</div>
                            <div>银行理财-昆仑财富</div>
                        </div>
                        <div class="tabs-section">
                            <div class="tabs-title-color">交易类型:</div>
                            <div>理财产品购买</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lineCente">
            <div class="onlineFinac" v-if="onlineFlag">
                <div
                    class="chosen-onlineFinac"
                    v-for="(item, index) in onlineList"
                    :key="index"
                    @click="handleOnlineList"
                >
                    <div class="chosen-swiper-box-title">
                        <div class="title-img">
                            <img
                                class="title-icon"
                                src="../../../img/tip_昆仑财富.png"
                                alt=" "
                            />
                            <span class="titleInfo">{{ item.imgTile }}</span>
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
                <Footer>
                    <img
                        class="footer-img"
                        src="../../../img/水印_昆仑银行全程保障交易资金安全.png"
                        alt=""
                    />
                </Footer>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Icon, Tab, Tabs, Search, Divider, Button, Sticky } from 'vant';

@Component({
    components: {
        [Button.name]: Button,
        [Icon.name]: Icon,
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [Search.name]: Search,
        [Divider.name]: Divider,
        [Sticky.name]: Sticky,
    },
})
export default class BankManage extends Vue {
    private active: any = 0;
    private tabActive: any = 0;
    private flag: number = 0;
    private activeAll: number = 0;
    private isShow: boolean = true;
    private onlineFlag: boolean = true;
    private holdFlag: boolean = false;
    private entrustFlag: boolean = false;
    private value: string = '';
    private needFixed: boolean = false;
    private isShowBtn: number = 0;
    private container: any = null;
    private titleList: any = [
        { id: '0', name: '在线理财' },
        { id: '1', name: '持有中' },
        { id: '2', name: '委托中' },
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
.bankManage{
    display: -webkit-flex;
    display: flex; // 关键， flex布局
    flex-direction: column; // 关键，三块主题column摆放。
    height: 100vh; // 关键，设置高度为可见高度的100%；
    .tabs-box{
        margin-top 50px
        width:100%;
        height:50px;
        z-index 999
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
    .lineCente{
        margin-top: 45px;
        flex: 1; // 关键， 填充剩余空间
        width: 100%;
        overflow-y: scroll;   // 关键， 超出部分滚动
    }
    .chosen-box{
        background:rgba(242,242,242,1);
        width 100%
        margin 0 auto
        .van-search{
            width:335px;
            margin 0 auto
        }
        .van-search__content{
            background-color: #fff
        }
        .chosen-swiper-box-title {
            background:rgba(250,250,250,1);
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
    .chosen-tabs {
            width:335px;
            margin 15px auto
            padding 10px
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            background #FAFAFA;
            font-size 15px
            color rgba(51,51,51,1);
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
                line-height: 30px;
                align-items: center;
                justify-content: space-between;
                .tabs-title-color{
                    color:rgba(136,136,136,1);
                }
            }
    }
    .onlineFinac{
        display: -webkit-flex;
        display: flex; // 关键， flex布局
        flex-direction: column; // 关键，三块主题column摆放。
        height: 100vh; // 关键，设置高度为可见高度的100%；
        header{
            width: 100%;
            background: springgreen;
        }
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
                background:rgba(250,250,250,1);
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
    .footer-img{
        width 209px
        height 50px
    }
    .footer-box {
        display: flex;
        height: 100px;
        background $back;
        justify-content: center;
        align-items center
        margin-top 5px
        padding 15px 0 15px 0

        .watermark{
            margin 0 auto
            width 325px
            height 32px
        }
    }
}

}
</style>
