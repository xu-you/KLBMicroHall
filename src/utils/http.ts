import axios from 'axios';
import { Dialog } from 'vant';
import { nativeBack } from '@/api/native';
import dateFormat from 'dateformat';

// 创建axios实例
const http = axios.create({
    baseURL: window.globalConfig.VUE_APP_API,
    timeout: 60000, // 请求超时时间
});

// 拦截器可以在.then()或者.catch()之前对请求/返回的数据进行处理
// requeset 拦截器
http.interceptors.request.use(
    // 请求发送之前做一些配置，做一些事, 让每个请求携带token
    config => {
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '{}');
        // 会话
        const getToken = sessionStorage.getItem('token');
        config.method = 'POST';
        console.log(
            '--------------------- Request Start ---------------------'
        );
        console.log('请求方法: ' + config.url);
        console.log('请求参数: ' + JSON.stringify(config.data));
        config.headers['Content-Type'] = 'application/json';
        config.headers['O-Partner'] = userInfo.partnerId;
        config.headers['O-App'] = userInfo.appKey;
        config.headers['O-Product'] = userInfo.productId;
        config.headers['O-ReqTime'] = dateFormat(new Date(), 'yyyymmddHHMMss');
        config.headers['O-Sign'] = userInfo.sign;
        config.headers['O-User'] = userInfo.clientId;
        if (getToken) {
            config.headers['O-Token'] = getToken;
        }
        return config;
    },
    // 请求出错时的统一处理
    error => {
        console.log(error);
        Promise.reject(error);
    }
);

// response拦截器
http.interceptors.response.use(
    response => {
        // 会话创建
        if (response.headers['o-token']) {
            sessionStorage.setItem('token', response.headers['o-token']);
        }
        const res = response.data;
        console.log('响应参数: ' + JSON.stringify(res));
        console.log('--------------------- Request End ---------------------');
        // 非法请求
        if (res.code === 'OBP00900000') {
            Dialog.alert({ message: '非法请求!' }).then(() => {
                nativeBack('close');
            });
        }
        // 状态码非000000均为异常状态
        if (res.code === '200') {
            if (res && res.data && res.data.code === 'S00000200') {
                return res.data.data || {};
            } else {
                Dialog({ message: res.data.msg || '响应码不为S00000200' });
                return Promise.reject(new Error(res.data.msg));
            }
        } else {
            Dialog({ message: res.msg });
            return Promise.reject(new Error(res.msg));
        }
    },
    error => {
        Dialog({ message: 'http状态码不存在，请检查您的网络连接' });
        return Promise.reject(error);
    }
);

export default http;
