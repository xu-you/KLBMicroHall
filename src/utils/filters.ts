import Vue from 'vue';
//  千分符
Vue.filter('moneyFormatter', (value: string) => {
    if (!value) {
        return '';
    }
    const arr = value.split('.');
    const floatNum = arr[1] || '00';
    value = value.replace(/\.\d+/, '');
    const reg = /(\d+)(\d{3})/;
    while (reg.test(value)) {
        value = value.replace(reg, '$1,$2');
    }
    return value + '.' + floatNum;
});
//  钱包账户，银行卡脱敏处理
Vue.filter('hideAccountNo', (value: string) => {
    if (!value) {
        return '';
    }
    value = value.toString();
    if (value === '请选择付款方式') {
        return value;
    }
    return value.substring(0, 4) + ' **** **** ' + value.substr(-4);
});

// 姓名脱敏
Vue.filter('hideName', (value: string) => {
    if (!value) {
        return '';
    }
    const str = value.toString();
    if (str.length <= 3) {
        return '* ' + str.substring(1, str.length);
    } else if (str.length > 3 && str.length <= 6) {
        return '* * ' + str.substring(2, str.length);
    } else if (str.length > 6) {
        return str.substring(0, 2) + ' * * * * ' + str.substring(6, str.length);
    }
});

// 身份证号脱敏
Vue.filter('hideIdCard', (value: string) => {
    if (!value) {
        return '';
    }
    value = value.replace(/^(.{3})(?:\w+)(.{4})$/, '$1 *********** $2');
    return value;
});

// 交易类型
Vue.filter('tranType', (value: string) => {
    if (!value) {
        return '';
    }
    switch (value) {
        case '0':
            return '充值';
        case '1':
            return '提现';
        case '2':
            return '计息';
        case '3':
            return '结息';
        case '4':
            return '支付';
        case '5':
            return '长款';
        case '6':
            return '短款';
        case '7':
            return '退款';
    }
});
