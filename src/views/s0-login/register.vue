<template>
    <div class="opernVirtualAccount">
        <Header>注册</Header>
        <div class="content">
            <div class="content-box">
                <validation-provider
                    class="custom-hairline-bottom"
                    :rules="{ required: true }"
                    v-slot="{ errors }"
                >
                    <van-field
                        v-model="mobileNo"
                        label="姓名"
                        label-width="3rem"
                        placeholder="请输入您的姓名"
                        :error-message="errors[0]"
                        maxlength="11"
                    />
                </validation-provider>
                <validation-provider
                    class="custom-hairline-bottom"
                    :rules="{ required: true }"
                    v-slot="{ errors }"
                >
                    <van-field
                        v-model="mobileNo"
                        label="身份证"
                        label-width="3rem"
                        placeholder="请输入您的身份证"
                        :error-message="errors[0]"
                        maxlength="11"
                    />
                </validation-provider>
                <validation-provider
                    class="custom-hairline-bottom"
                    :rules="{ required: true }"
                    v-slot="{ errors }"
                >
                    <van-field
                        v-model="mobileNo"
                        label="登录密码"
                        label-width="3rem"
                        placeholder="请输入您的登录密码"
                        :error-message="errors[0]"
                        maxlength="11"
                    />
                </validation-provider>
                <validation-provider
                    class="custom-hairline-bottom"
                    :rules="{ required: true }"
                    v-slot="{ errors }"
                >
                    <van-field
                        v-model="mobileNo"
                        label="确认密码"
                        label-width="3rem"
                        placeholder="请输入您的确认密码"
                        :error-message="errors[0]"
                        maxlength="11"
                    />
                </validation-provider>
            </div>

            <validation-observer v-slot="{ invalid, passes }">
                <van-cell-group class="mt10">
                    <validation-provider
                        class="custom-hairline-bottom"
                        :rules="{ required: true, phone: true }"
                        v-slot="{ errors }"
                    >
                        <van-field
                            v-model="mobileNo"
                            label="手机号码"
                            label-width="3rem"
                            placeholder="请输入您的银行卡预留手机号"
                            :error-message="errors[0]"
                            maxlength="11"
                        />
                    </validation-provider>
                    <validation-provider
                        class="custom-hairline-bottom"
                        :rules="{ required: true, msgCode: true }"
                        v-slot="{ errors }"
                    >
                        <van-field
                            v-model="msgCode"
                            class="title-center"
                            label="短信验证码"
                            label-width="3rem"
                            placeholder="请输入短信验证码"
                            :error-message="errors[0]"
                            maxlength="6"
                        >
                            <van-button
                                slot="button"
                                size="small"
                                type="primary"
                                :disabled="
                                    btnText !== '获取验证码' ||
                                        !/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(
                                            mobileNo
                                        )
                                "
                                >{{ btnText }}</van-button
                            >
                        </van-field>
                    </validation-provider>
                </van-cell-group>
                <van-cell-group class="mt10">
                    <van-cell>
                        <div class="mheight24">
                            <validation-provider
                                :rules="{ checkBox: true }"
                                v-slot="{ errors }"
                            >
                                <van-checkbox
                                    v-model="checked"
                                    shape="square"
                                    icon-size="0.506667rem"
                                    :label-disabled="true"
                                >
                                    我已同意
                                    <span
                                        class="blue"
                                        @click="showAgreement = !showAgreement"
                                        >《昆仑银行客户服务协议》</span
                                    >
                                </van-checkbox>
                                <span class="van-field__error-message">
                                    {{ errors[0] }}
                                </span>
                            </validation-provider>
                        </div>
                    </van-cell>
                </van-cell-group>
                <div class="btn-box">
                    <van-button
                        class="common-btn"
                        type="default"
                        size="large"
                        :loading="loading"
                        :show="show"
                        @click="showPopup"
                        >开通</van-button
                    >
                    <!-- <van-button
                        class="common-btn"
                        type="default"
                        size="large"
                        disabled
                        >开通</van-button
                    > -->
                    <div class="login-footer">
                        <span>Copyright© 昆仑银行 版权所有</span>
                    </div>
                </div>
            </validation-observer>
            <div class="popup-box">
                <van-popup
                    v-model="show"
                    round
                    closeable
                    close-icon="close"
                    class="bindCardImg-box"
                >
                    <img
                        class="bindCardImg"
                        src="../../img/box_img未绑卡.png"
                        alt=""
                    />
                    <div class="bindCenter">
                        <span class="bindTitle"
                            >尊敬的用户，您尚未绑定银行卡</span
                        >
                        <van-button
                            class="common-btn btn"
                            round="true"
                            @click="clickOpen"
                            >立即绑卡</van-button
                        >
                        <span class="bindTitle bindClick">稍后绑卡，跳过</span>
                    </div>
                </van-popup>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
    Cell,
    CellGroup,
    Field,
    Button,
    Checkbox,
    Popup,
    Icon,
    Toast,
} from 'vant';
import initKeyBoard, { keyPads } from '@/components/SafeKeyboard';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: '此项为必填项',
});

extend('phone', {
    validate: value =>
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(
            value
        ),
    message: '手机号码不正确',
});

extend('msgCode', {
    validate: value => /^\d{6}$/.test(value),
    message: '请输入6位短信验证码',
});

extend('checkBox', {
    validate: value => value === true,
    message: '请阅读并同意服务协议',
});

@Component({
    components: {
        [Field.name]: Field,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Button.name]: Button,
        [Checkbox.name]: Checkbox,
        [Popup.name]: Popup,
        [Icon.name]: Icon,
        ValidationProvider,
        ValidationObserver,
    },
})
export default class OpenVirtualAccount extends Vue {
    private show: boolean = false;
    // console.log(this.$route.query);
    private password: string = '';
    private loading: boolean = false;
    private accountInfo: any = {
        username: '',
        idCardNo: '',
        accountNo: '',
    };
    private checked: boolean = false;
    private showAgreement: boolean = false;
    private msgCode: string = '';
    private btnText: string = '获取验证码';
    private mobileNo: any = '';
    private msgCodeId: string = '';

    private mounted() {}
    private showPopup() {
        this.show = true;
        console.log(123);
    }
}
</script>

<style lang="stylus">
.opernVirtualAccount {
    width: 100%;
    height: 100%;

    .content {
        width: 100%;
        height: calc(100vh - 55px);
        overflow: auto;
        background: $back;

        &::-webkit-scrollbar {
            width: 0;
        }

        .content-box {
            margin-top: 10px;
        }

        .van-cell {
            padding-left: 20px;
            padding-right: 20px;

            .blue {
                color: $link;
            }
        }

        .mt10 {
            margin-top: 10px;
        }

        .mt20 {
            margin-top: 20px;
        }

        .height24 {
            height: 24px;
            display: flex;
            align-items: center;
        }

        .close-bar {
            height: 45px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        .title-center {
            padding-top: 7px;
            padding-bottom: 7px;

            /deep/ .van-cell__title {
                display: flex;
                align-items: center;
            }
        }

        .van-button--primary {
            // width 86px
            background-color: $gradient-left;
            border-color: $gradient-left;
        }

        .btn-box {
            margin-top: 100px;

            .login-footer {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #666666;
                line-height: 33px;
                margin-top: 15px;
            }
        }

        .tip-box {
            padding: 0 20px 10px;

            p {
                margin: 6px;
            }

            .red {
                color: $red;
                font-size: 14px;
            }

            .grey {
                color: $font-grey;
                font-size: 12px;
            }
        }
        .popup-box {
            font-size:16px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:25px;

            .bindCardImg-box {
                width: 80%;
                height: 40%;

                .bindCardImg {
                    width: 100px;
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: -30px auto;
                }
                .bindCenter {
                    height 200px
                    font-size 16px
                    display: flex;
                    line-height 25px
                    flex-direction:column
                    justify-content: center;
                    align-items: center;
                    .btn{
                        width 200px
                    }
                    .bindTitle{
                        margin 15px
                    }
                    .bindClick{
                        font-size 15px
                        color #EB3E2D
                    }
                }
            }
        }
    }

    .van-popup {
        position: fixed;
        max-height: 100%;
        overflow-y: visible;
        background-color: #fff;
    }
}
</style>
