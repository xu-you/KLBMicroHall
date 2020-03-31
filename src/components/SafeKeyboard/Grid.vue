<template>
    <div class="Grid">
        <input type="text" id="PasswordGird" name="PasswordGird" />
        <ul style="margin: 20px auto" class="ccsk-6-gird ">
            <li><span class="ccsk-dot "></span></li>
            <li><span class="ccsk-dot "></span></li>
            <li><span class="ccsk-dot "></span></li>
            <li><span class="ccsk-dot "></span></li>
            <li><span class="ccsk-dot "></span></li>
            <li><span class="ccsk-dot "></span></li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

declare var $: any;

@Component({
    components: {},
})
export default class Grid extends Vue {
    @Prop({ default: true }) private show!: boolean;

    @Watch('show')
    trigger(newVal: boolean, oldVal: boolean) {
        console.log(newVal, oldVal);
        console.log(this.subKeyPadGird);
        newVal ? this.initGird() : this.subKeyPadGird.hide();
    }

    private subKeyPadGird: any;

    private mounted() {
        this.initGird();
    }

    private initGird() {
        if (this.subKeyPadGird !== undefined) {
            $('span')
                .removeClass()
                .addClass('ccsk-dot');
        }
        $.ccsk_ready(() => {
            let ParentKeyPad = $.getCCSKeyPad(
                '/moneymanager/SecurityKeyboardServlet',
                'SixNumber'
            ); //纯数字键盘
            this.subKeyPadGird = ParentKeyPad.init({
                //antiScreenCapture: true,
                elementId: 'PasswordGird',
                placeholder: '请输入数字密码',
                length: 6,
                input_style: {
                    width: 200,
                    height: 34,
                },
                autoFocus: true, //初始化完成后自动弹起
                stacked: true, //此属性为true，点击空白处不会自动收起
            });

            //6格输入框关联到原始输入框
            $('.ccsk-6-gird').bind('touchstart', function(e: any) {
                $('#' + 'PasswordGird' + '_ccskinput').trigger('touchstart');
                e.stopPropagation();
            });

            //监听输入长度，自动提交
            this.subKeyPadGird.onchange(() => {
                var len = this.subKeyPadGird.getPasswordLength();
                ccsk6girdLengthChanged(len);
                if (len == 6) {
                    this.subKeyPadGird.hide();

                    setTimeout(() => {
                        //alert('输满6位，自动获取密文提交： ' + this.subKeyPadGird.getPasswordValue());
                        this.$emit(
                            'change',
                            this.subKeyPadGird.getPasswordValue()
                        );

                        $('#PasswordS3_ccskinput').val('•');
                        $('#PasswordS3_ccsk').val(
                            this.subKeyPadGird.getPasswordValue()
                        );
                    }, 100);
                }
            });

            //改变6格里的黑点
            function ccsk6girdLengthChanged(len: any) {
                if (len < 0 || len > 6) return;
                console.log($('.ccsk-6-gird .ccsk-dot'));
                var arr = $('.ccsk-6-gird .ccsk-dot');
                for (var i = 0; i < 6; i++) {
                    if (i < len) {
                        $(arr[i]).addClass('ccsk-dot-fill');
                    } else
                        $(arr[i])
                            .removeClass()
                            .addClass('ccsk-dot');
                }
            }
        });
    }
}
</script>

<style>
/*隐藏原始输入框*/
#PasswordGird_ccskinput {
    display: none;
}

.ccsk-6-gird {
    padding: 0;
    width: 80%;
    height: 44px;
    position: relative;
    list-style: none;
}

.ccsk-6-gird li {
    width: 16.6667%;
    height: 100%;
    float: left;
    border: 1px solid #f1f1f1;
    margin-left: -1px;
}

.ccsk-6-gird .ccsk-dot.ccsk-dot-fill {
    display: block;
    border: 1px solid #333;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: #333;
    margin: 16px auto;
    position: relative;
}
</style>
<style lang="stylus" scoped></style>
