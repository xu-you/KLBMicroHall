import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: '/homePages',
        meta: {
            index: 0,
        },
    },
    {
        path: '/homePages',
        name: 'homePages',
        component: () => import('../views/s1-homePages/index.vue'),
        meta: {
            index: 0,
        },
    },
    {
        path: '/myPages',
        name: 'myPages',
        component: () => import('../views/s3-myPages/index.vue'),
        meta: {
            index: 0,
        },
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('../views/s2-product/index.vue'),
        meta: {
            index: 0,
        },
    },
    {
        path: '/bankManage',
        name: 'bankManage',
        component: () =>
            import('../views/s2-product/bankManage/bankManage.vue'),
        meta: {
            index: 0,
        },
    },
    {
        path: '/bankOnline',
        name: 'bankOnline',
        component: () =>
            import('../views/s2-product/bankManage/bankOnline.vue'),
        meta: {
            index: 0,
        },
    },
    {
        path: '/bankManageDetails',
        name: 'bankManageDetails',
        component: () =>
            import('../views/s2-product/bankManage/bankManageDetails.vue'),
        meta: {
            index: 0,
        },
    },
    {
        path: '/queryProductTime',
        name: 'queryProductTime',
        component: () =>
            import('../views/s2-product/bankManage/queryProductTime.vue'),
        meta: {
            index: 0,
        },
    },
    {
        path: '/investment',
        name: 'investment',
        component: () =>
            import('../views/s2-product/bankManage/investment.vue'),
        meta: {
            index: 0,
        },
    },
    {
        path: '/wealthPlan',
        name: 'wealthPlan',
        component: () => import('../views/s2-product/wealthPlan/index.vue'),
        meta: {
            index: 0,
        },
    },
    {
        path: '/myInvestment',
        name: 'myInvestment',
        component: () =>
            import(
                '../views/s2-product/wealthPlan/myInvestment/myInvestment.vue'
            ),
        meta: {
            index: 0,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/s0-login/login.vue'),
        meta: {
            index: 0,
        },
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/s0-login/register.vue'),
        meta: {
            index: 0,
        },
    },
    {
        path: '/active',
        name: 'active',
        component: () => import('../views/s1-homePages/active/index.vue'),
        meta: {
            index: 0,
        },
    },
];

const router = new VueRouter({
    routes,
});

export default router;
