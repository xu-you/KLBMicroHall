<template>
    <div class="login">
        <!-- <Header>昆仑银行微厅</Header> -->
        <!-- <div class="header-logo"></div> -->
        <img class="login-img" src="../../img/卡片.png" alt="" />
        <div class="login-logo">
            <img src="../../img/头像_昆仑银行.png" alt="" />
            <div>
                欢迎登录微厅
            </div>
        </div>
        <div class="login-cell">
            <validation-observer v-slot="{ invalid, passes }">
                <van-cell-group>
                    <validation-provider
                        class="custom-hairline-bottom"
                        :rules="{ required: true, name: true }"
                        v-slot="{ errors }"
                    >
                        <img src="../../img/icon_40用户名.png" alt="" />
                        <van-field
                            class="field-btn"
                            v-model="clientId"
                            placeholder="用户名/手机号"
                            input-align="center"
                            error-message-align="center"
                            :error-message="errors[0]"
                        />
                    </validation-provider>
                    <validation-provider
                        class="custom-hairline-bottom"
                        :rules="{ required: true, orderNo: true }"
                        v-slot="{ errors }"
                    >
                        <img src="../../img/icon_40密码.png" alt="" />
                        <van-field
                            class="field-btn"
                            v-model="username"
                            placeholder="密码"
                            type="password"
                            input-align="center"
                            error-message-align="center"
                            :error-message="errors[0]"
                        />
                    </validation-provider>
                </van-cell-group>
                <van-radio
                    v-model="radio"
                    class="cell"
                    name="1"
                    shape="square"
                    icon-size="10px"
                    checked-color="red"
                    >记住用户名</van-radio
                >
                <div class="btn-box">
                    <van-button
                        class="common-btn"
                        type="default"
                        size="large"
                        :disabled="invalid"
                        :loading="loading"
                        @click="passes(queryAccount)"
                        >登录</van-button
                    >
                    <div class="btn-footer" @click="clickRegister">
                        还没有账号？马上注册
                    </div>
                </div>
            </validation-observer>
        </div>
        <div class="login-footer">
            <span>Copyright© 昆仑银行 版权所有</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Cell, CellGroup, Field, Button, Picker, Popup } from 'vant';
import { queryUserAccount } from '@/api';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: '此项为必填项',
});

extend('name', {
    validate: value => /^(?:[\u4e00-\u9fa5·]{2,16})$/.test(value),
    message: '姓名格式不正确',
});

extend('shouldHave', {
    validate: value => !!value,
    message: '请选择证件类型',
});

extend('idCard', {
    validate: value =>
        /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$/.test(
            value
        ),
    message: '身份证格式不正确',
});

extend('orderNo', {
    validate: value => /^[A-Za-z0-9]+$/.test(value),
    message: '只能输入字母或数字',
});

extend('currency', {
    validate: value =>
        /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0){1}$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/.test(
            value
        ),
    message: '金额格式不正确',
});

@Component({
    components: {
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Field.name]: Field,
        [Button.name]: Button,
        [Picker.name]: Picker,
        [Popup.name]: Popup,
        ValidationProvider,
        ValidationObserver,
    },
})
export default class QueryAccount extends Vue {
    private clientId: string = '';
    private username: string = '';
    private idCardType: any = { text: '身份证', value: '01' };
    private idCardTypes: any[] = [{ text: '身份证', value: '01' }];
    private showPicker: boolean = false;
    private idCardNo: string = '';
    private loading: boolean = false;
    private radio: any = '';
    // 充值
    private rechargeData: any = {
        tranAmt: '',
    };
    // 支付
    private orderInfo: any = {
        orderAmt: '',
    };

    private created() {
        const loginData = JSON.parse(
            sessionStorage.getItem('loginData') || '{}'
        );
        this.clientId = loginData.clientId;
        this.username = loginData.clientName;
        this.idCardNo = loginData.idCardNo;

        const rechargeData = JSON.parse(
            sessionStorage.getItem('rechargeData') || '{}'
        );
        this.rechargeData = rechargeData;

        const orderInfo = JSON.parse(
            sessionStorage.getItem('orderData') || '{}'
        );
        this.orderInfo = orderInfo;
    }

    private onConfirm(value: any) {
        this.idCardType = value;
        this.showPicker = false;
    }

    private queryAccount() {
        const loginData = {
            clientId: this.clientId,
            clientName: this.username,
            idCardNo: this.idCardNo,
        };
        /* const loginOrderData = {
            orderNo     : this.orderNo,
            merchNo     : this.merchNo,
            agentNum    : this.agentNum,
            orderAmt    : this.orderAmt,
            discountAmt : this.discountAmt,
            orderSummary: this.orderSummary,
            busiType    : this.busiType,
        }; */
        sessionStorage.setItem('loginData', JSON.stringify(loginData));
        /* sessionStorage.setItem(
            'loginOrderData',
            JSON.stringify(loginOrderData)
        ); */
        this.$router.push('/tabbar');
    }

    private goRecharge() {
        const loginData = {
            clientId: this.clientId,
            clientName: this.username,
            idCardNo: this.idCardNo,
        };
        sessionStorage.setItem('loginData', JSON.stringify(loginData));
        sessionStorage.setItem(
            'rechargeData',
            JSON.stringify(this.rechargeData)
        );
        this.$router.push('/reCharge');
    }

    private goPayment() {
        const loginData = {
            clientId: this.clientId,
            clientName: this.username,
            idCardNo: this.idCardNo,
        };
        sessionStorage.setItem('loginData', JSON.stringify(loginData));
        sessionStorage.setItem('orderData', JSON.stringify(this.orderInfo));
        this.$router.push('/payment');
    }
    private clickRegister() {
        this.$router.push('/register');
    }
}
</script>

<style lang="stylus" scoped>
.login {
    // height  : calc(100vh - 55px);
    overflow: auto;
    .login-img {
        position: absolute;
        left: 0;
        top: 0;
        width: 375px;
        height: 100%;
    }
    .login-logo {
        display: flex;
        position: absolute;
        left: 118px;
        top: 50px;
        flex-direction:  column
        font-size:25px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        justify-content: center;
        align-items: center;
        img {
            width 80px
            margin-bottom 10px
        }
    }
    .login-cell {
        display: flex;
        width 355px
        position: absolute;
        left: 10px;
        top: 190px;
        background #FFFFFF
        border-radius 10px
        justify-content: center;
        align-items: center;
        padding 25px
        img {
            width 20px
            height 20px
            position: absolute;
            left: 20px;
            margin-top 25px
            z-index 1
        }
        .field-btn{
            margin-top 10px
            width:285px;
            height:55px;
            background:rgba(250,250,250,1);
            border-radius:50px;
            border:1px solid rgba(227,227,227,1);
        }
    }

    .common-btn {
        background:linear-gradient(90deg,rgba(255,84,0,1) 0%,rgba(255,143,0,1) 100%);
    }
    .cell {
        height 40px
        font-size 14px
        line-height 30px
    }
    .btn-footer {
        display: flex;
        height 40px
        font-size 14px
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:600;
        color:rgba(255,84,0,1);
        line-height:42px;
        justify-content: center;
        align-items: center;
    }
    .login-footer{
        display: flex;
        width 355px
        position: absolute;
        left: 10px;
        top: 600px;
        border-radius 10px
        justify-content: center;
        align-items: center;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:33px;
    }
    .loginTitle {
        width        : 100%;
        height       : 45px;
        background   : #ffffff;
        text-align   : center;
        line-height  : 45px;
        font-size    : 18px;
        margin-bottom: 10px;
    }

    .content {
        height  : calc(100vh - 55px);
        overflow: auto;

        &::-webkit-scrollbar {
            width: 0;
        }

        .pageTip {
            display     : block;
            padding-left: 15px;
            height      : 40px;
            line-height : 40px;
            color       : #999;
            font-size   : 14px;
        }

        .van-cell-group {
            background: transparent;
        }

        .van-cell {
            padding-left : 20px;
            padding-right: 20px;
        }

        .mt20 {
            margin-top: 20px;
        }
    }
}
</style>
