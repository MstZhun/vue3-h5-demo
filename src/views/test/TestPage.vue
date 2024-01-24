<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import TestComponent from '@/components/TestComponent.vue'

import { showToast } from 'vant'
import { testGetApi } from '@/api/home'
const counter = useCounterStore()

const toast = () => {
    showToast('提示内容')
    console.log('env: ', import.meta.env.VITE_HTTP_URL)
    console.log('env: ', import.meta.env.VITE_ENV)
}

const requestApi = async () => {
    // const res = await testApi({
    //     longitude: 116.44355,
    //     latitude: 39.9219,
    //     recommendType: 0,
    //     positions: [],
    //     cityCodes: [110100],
    //     salaryRadiusCode: 0,
    //     experienceRadiusCode: [],
    //     jobType: [],
    //     afterId: '',
    //     size: 10,
    //     current: 1
    // })
    // console.log('99999----', res, res.hasMore, res.size)
    const res = await testGetApi({
        type: '1__,__2',
        displayChannel: 1
    })
    console.log('88888----', res.flag)
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
        <van-button type="primary" @click="requestApi">api测试</van-button>
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
@/service/test @/api/test @/api/home
