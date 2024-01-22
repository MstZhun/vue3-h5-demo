<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import TestComponent from '@/components/TestComponent.vue'

import { showToast } from 'vant'
const counter = useCounterStore()

const toast = () => {
    showToast('提示内容')
    console.log('env: ', import.meta.env.VITE_HTTP_URL)
    console.log('env: ', import.meta.env.VITE_RUNTIME_ENV)
}
</script>
<template>
    <div class="wrap">
        <div class="card">
            <img
                class="ava"
                src="https://cdn-zhida.wandawic.com/zhida_assets/images/default-avatar.png"
            />
            <div>
                <div class="name">忍者神龟</div>
                <div class="desc">这是一段介绍</div>
            </div>
        </div>
        <div>{{ counter.count }}</div>
        <van-button type="primary" @click="counter.increment">测试stores+1</van-button>
        <van-button type="primary" to="/activity">路由跳转</van-button>
        <van-button type="primary" @click="toast">测试vant函数调用</van-button>
        <TestComponent />
    </div>
</template>
<style lang="scss" scoped>
.wrap {
    padding: 17px;
}
.card {
    display: flex;
    align-items: center;
    height: 68px;
    background: #eee;
    border-radius: 8px;
    .ava {
        width: 44px;
        height: 44px;
        border-radius: 22px;
        margin: 0 10px;
    }
    .name {
        font-size: 16px;
        font-family:
            PingFangSC,
            PingFang SC;
        font-weight: 500;
        color: #000000;
        line-height: 20px;
    }
    .desc {
        font-size: 10px;
        font-family:
            PingFangSC,
            PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 20px;
    }
}
</style>
