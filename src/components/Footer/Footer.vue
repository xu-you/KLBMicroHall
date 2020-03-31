<template>
    <div class="footer">
        <div class="footer-main">
            <div class="footer-img"><slot></slot></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Header extends Vue {}
</script>

<style lang="stylus" scoped>
.footer {
    .footer-main {
        display: flex;
        height: 100px;
        background $back;
        margin-top 15px
        justify-content: center;
        align-items center
    }
}
</style>
