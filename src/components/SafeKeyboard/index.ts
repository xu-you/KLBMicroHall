declare var $: any;

interface Op {
    id: string;
    placeholder: string;
}

const subKeyPad: any[] = [];
const initMkeyboard = (options: Op[]) => {
    // let password = '';
    $.ccsk_ready(() => {
        const ParentKeyPad = $.getCCSKeyPad(
            `/moneymanager/SecurityKeyboardServlet`,
            // `${process.env.VUE_APP_KEYBOARD}/moneymanager/SecurityKeyboardServlet`,
            'SixNumber'
        );
        options.forEach((option, index: number) => {
            // 初始化密码键盘
            subKeyPad[index] = ParentKeyPad.init({
                elementId: option.id,
                placeholder: option.placeholder || '请输入交易密码',
                length: 6,
                input_style: {
                    width: '5.92rem',
                    height: '0.64rem',
                    fontSize: '0.373333rem',
                },
                antiScreenCapture: true, // 防止录屏
                autoFocus: false, // 初始化完成后自动弹起
                stacked: false, // 点击空白处不会自动收起
            });
            // 输入完成后的回调
            // subKeyPad[index].onchange(() => {
            //     const len = subKeyPad[index].getPasswordLength();
            //     if (len === 6) {
            //         password = subKeyPad[index].getPasswordValue();
            //         option.callback(password);
            //         // if (option.remoteSM2) {
            //         //     $.get(`${process.env.VUE_APP_KEYBOARD}/security/SecurityKeyboardServlet?Password=${password}`,
            //         //         (res: any) => {
            //         //             if (res.charAt(0) === '!') {
            //         //                 let rspMsg = '获取后台密文失败';
            //         //                 switch (res) {
            //         //                     case '!00001':
            //         //                         rspMsg = '获取当前密码内容为空，请退出界面重新进入!';
            //         //                         break;
            //         //                     case '!00002':
            //         //                         rspMsg = '系统检测到您在当前页面停留时间过长，请退出界面重新进入!';
            //         //                         break;
            //         //                     case '!00003':
            //         //                         rspMsg = '当前安全键盘调用异常，请退出界面重新进入!';
            //         //                         break;
            //         //                 }
            //         //                 Dialog({ message: rspMsg });
            //         //                 option.callback('密码服务响应报文异常');
            //         //             } else {
            //         //                 option.callback(res);
            //         //             }
            //         //         });
            //         // }
            //     } else {
            //         option.callback('');
            //     }
            // });
        });
    });
};

// 第一个和第二个密码键盘对比密钥
export const identical = () => {
    return subKeyPad[1].identical(subKeyPad[0]);
};

// 清空对应输入域
export const clear = (index: number) => {
    return subKeyPad[index].clear();
};

// 导出密码键盘
export const keyPads = subKeyPad;

export default initMkeyboard;
