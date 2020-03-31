<template>
    <van-tabbar
        v-model="active"
        inactive-color="#777777"
        active-color="#000000"
    >
        <van-tabbar-item
            v-for="(item, index) in tabbars"
            :key="index"
            :to="item.name"
        >
            <span>{{ item.title }}</span>
            <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? item.active : item.normal"
            />
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    name: 'tabbar',
    data() {
        return {
            active: 0,
            tabbars: [
                {
                    name: '/',
                    title: '首页',
                    normal: require('../../img/taber/首页_n.png'),
                    active: require('../../img/taber/首页_h.png'),
                },
                {
                    name: 'product',
                    title: '产品',
                    normal: require('../../img/taber/产品_n.png'),
                    active: require('../../img/taber/产品_h.png'),
                },
                {
                    name: 'myPages',
                    title: '我的',
                    normal: require('../../img/taber/我的_n.png'),
                    active: require('../../img/taber/我的_h.png'),
                },
            ],
        };
    },
    methods: {},
    //通过路由跳转判断选中的样式
    created() {
        if (this.$route.name == 'index') {
            this.active = 0;
        } else if (this.$route.name == 'product') {
            this.active = 1;
        } else if (this.$route.name == 'myPages') {
            this.active = 2;
        }
    },
};
</script>

<style lang="stylus" scoped>
.index-box {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
