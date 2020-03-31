<template>
    <div class="queryProductTime">
        <Header>委托查询</Header>
        <div class="productTime_centent">
            <van-tabs v-model="active" line-width="30px" @click="clickTabs">
                <van-tab title="交易查询">
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
                    <van-divider />
                    <div class="dateBg">
                        <van-cell
                            title="开始日期："
                            is-link
                            @click="showPopup('01')"
                        >
                            {{ startDate }}
                        </van-cell>
                        <van-popup
                            v-model="startDateShow"
                            position="bottom"
                            :style="{ height: '30%' }"
                        >
                            <van-datetime-picker
                                v-model="currentDate"
                                type="date"
                                :min-date="minDate"
                                :max-date="maxDate"
                                :formatter="formatter"
                                @confirm="handleClickconfirm('01')"
                                @cancel="handleClickcancel('01')"
                            />
                        </van-popup>
                        <van-cell
                            title="结束日期："
                            is-link
                            @click="showPopup('02')"
                        >
                            {{ endDate }}
                        </van-cell>
                        <van-popup
                            v-model="endDateShow"
                            position="bottom"
                            :style="{ height: '30%' }"
                        >
                            <van-datetime-picker
                                v-model="currentDate"
                                type="date"
                                :min-date="minDate"
                                :max-date="maxDate"
                                :formatter="formatter"
                                @confirm="handleClickconfirm('02')"
                                @cancel="handleClickcancel('02')"
                            />
                        </van-popup>
                    </div>
                    <div class="btn_query_box">
                        <van-button
                            class="btn_query empty"
                            round
                            @click="clickEmpty"
                        >
                            重置
                        </van-button>
                        <van-button class="btn_query queryBg" round>
                            查询
                        </van-button>
                    </div>
                </van-tab>
                <van-tab title="委托查询">
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
                    <van-divider />
                    <div class="dateBg">
                        <van-cell
                            title="开始日期："
                            is-link
                            @click="showPopup('01')"
                        >
                            {{ startDate }}
                        </van-cell>
                        <van-popup
                            v-model="startDateShow"
                            position="bottom"
                            :style="{ height: '30%' }"
                        >
                            <van-datetime-picker
                                v-model="currentDate"
                                type="date"
                                :min-date="minDate"
                                :max-date="maxDate"
                                :formatter="formatter"
                                @confirm="handleClickconfirm('01')"
                                @cancel="handleClickcancel('01')"
                            />
                        </van-popup>
                        <van-cell
                            title="结束日期："
                            is-link
                            @click="showPopup('02')"
                        >
                            {{ endDate }}
                        </van-cell>
                        <van-popup
                            v-model="endDateShow"
                            position="bottom"
                            :style="{ height: '30%' }"
                        >
                            <van-datetime-picker
                                v-model="currentDate"
                                type="date"
                                :min-date="minDate"
                                :max-date="maxDate"
                                :formatter="formatter"
                                @confirm="handleClickconfirm('02')"
                                @cancel="handleClickcancel('02')"
                            />
                        </van-popup>
                        <div class="btn_query_box">
                            <van-button
                                class="btn_query empty"
                                round
                                @click="clickEmpty"
                            >
                                重置
                            </van-button>
                            <van-button class="btn_query queryBg" round>
                                查询
                            </van-button>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <div class="footer-box">
            <img
                class="footer-img"
                src="../../../img/水印_昆仑银行全程保障交易资金安全.png"
                alt=""
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
    Tab,
    Tabs,
    Divider,
    Popup,
    DatetimePicker,
    Cell,
    CellGroup,
} from 'vant';
@Component({
    components: {
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [Divider.name]: Divider,
        [Popup.name]: Popup,
        [DatetimePicker.name]: DatetimePicker,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
    },
})
export default class QueryProductTime extends Vue {
    private active: number = 0;
    private minDate: any = new Date(2020, 0, 1);
    private maxDate: any = new Date(2025, 10, 1);
    private currentDate: any = new Date();
    private startDateShow: boolean = false;
    private endDateShow: boolean = false;
    private startDate: string = '';
    private endDate: string = '';
    private hoverColor: boolean = true;
    private hoverColorRigth: boolean = false;
    private hoverColorCenter: boolean = false;
    private formatter(type: any, val: any) {
        if (type === 'year') {
            return `${val}年`;
        } else if (type === 'month') {
            return `${val}月`;
        } else if (type === 'day') {
            return `${val}日`;
        }
        return val;
    }
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
    private showPopup(val: string) {
        switch (val) {
            case '02':
                this.endDateShow = true;
                break;
            default:
                this.startDateShow = true;
                break;
        }
    }
    private handleClickconfirm(val: string) {
        switch (val) {
            case '02':
                this.endDate = this.currentDate
                    .toLocaleDateString()
                    .replace(/\//g, '/');
                this.endDateShow = false;
                break;
            default:
                this.startDate = this.currentDate
                    .toLocaleDateString()
                    .replace(/\//g, '/');
                this.startDateShow = false;
                break;
        }
    }
    private handleClickcancel(val: string) {
        this.startDateShow = false;
        this.endDateShow = false;
    }
    private clickEmpty() {
        this.endDate = '';
        this.startDate = '';
    }
    private clickTabs() {
        this.endDate = '';
        this.startDate = '';
    }
}
</script>

<style lang="stylus" scoped>
.queryProductTime{
    display: flex;
    width: 100%;
    flex-direction: column;
    min-height: 100vh;
    background:rgba(255,255,255,1);
    .productTime_centent{
        flex 1
        margin 50px auto
        width 335px
        .queryBtn{
            z-index 9999
            display flex
            justify-content: center;
            margin 15px 20px 15px 20px
            .btn{
                width 112px;
                height 35px;
                border:1px solid rgba(227,227,227,1);
                font-size 14px;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(153,153,153,1);
                line-height:25px;
                text-align center
                background #FAFAFA;

            }
            .btnRoundleft{
                border-radius 5px 0px 0px 5px;
            }
            .btnRoundRigth{
                border-radius 0px 5px 5px 00px;
            }
            .hoverColor{
                background #F7E0DE;
                color #EB3E2D;
            }
        }
        .dateBg{
            background #fafafa
        }
        .btn_query_box{
            margin-top 15px
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .btn_query{
                width 163px
                height: 45px;
            }
            .empty{
                background #F7DBCB
                color #FF5400
            }
            .queryBg{
                background:linear-gradient(90deg,rgba(255,84,0,1) 0%,rgba(255,143,0,1) 100%);
                color #FFFFFF
            }
        }
    }

    .footer-box{
        display: flex;
        height: 80px;
        background $back;
        margin-top 15px
        align-items center
        justify-content: center;
        .footer-img{
            margin 0 auto
            height 32px
        }
    }

}
</style>
