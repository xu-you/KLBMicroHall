<template>
    <div class="bankManage">
        <Header>产品详情信息</Header>
        <div class="box">
            <div class="box-title">
                <img
                    src="../../../img/img昆仑银行.png"
                    alt=""
                    style="width:63px;height:63px"
                />
                <div>银行理财-昆仑财富</div>
            </div>
            <div class="chosen-tabs">
                <div class="title-color">产品详情信息</div>
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
        </div>
        <!-- <div class="footer-box">
            <img class="watermark" src="../../../img/水印.png" alt="" />
        </div> -->
        <Footer>
            <img
                class="footer-img"
                src="../../../img/水印_昆仑银行全程保障交易资金安全.png"
                alt=""
            />
        </Footer>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Cell, CellGroup } from 'vant';

@Component({
    components: {
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
    },
})
export default class BankManage extends Vue {
    private mounted() {
        sessionStorage.setItem('activeNumber', this.$route.query.active);
    }
}
</script>

<style lang="stylus">
.bankManage{
    display: flex;
    width: 100%;
    flex-direction: column;
    min-height: 100vh;
    background:rgba(255,255,255,1);
    .box{
        flex: 1;
        margin-top 50px
        .box-title {
            height 133px;
            background:rgba(250,250,250,1);
            display flex
            flex-direction: column;
            justify-content center
            align-items center
            font-size:18px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(51,51,51,1);
            line-height:25px;
        }
        .box-section{
            padding 15px
        }
        .chosen-tabs {
            width:335px;
            margin 15px auto
            padding 10px
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
    }
    .footer-box{
        display: flex;
        height: 80px;
        background $back;
        margin-top 15px
        align-items center
        justify-content: center;
        .watermark{
            margin 0 auto
            width 325px
            height 32px
        }
    }


}
</style>
