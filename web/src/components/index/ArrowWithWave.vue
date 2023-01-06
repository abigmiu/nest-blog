<!-- 首页 介绍 波浪动画和箭头 -->
<template>
    <DownIcon
        theme="outline"
        class="arrow-down"
        @click="onJump"
    />
    <div
        id="wave1"
        class="banner-wave"
    />
    <div
        id="wave2"
        class="banner-wave"
    />
</template>
<script lang="ts" setup>
import { Down as DownIcon } from '@icon-park/vue-next';

const onJump = () => {
    const mainEl = document.querySelector('.home-main');
    if (mainEl) {
        mainEl.scrollIntoView({
            behavior: 'smooth',
        });
    }
};
</script>

<style lang="scss" scoped>
.arrow-down {
    font-size: 40px;
    font-weight: bold;
    color: var(--white);
    position: absolute;
    bottom: 60px;
    animation: shake 1.5s ease-out infinite;
    z-index: 15;
    cursor: pointer;
    left: 50%;
    transform: translateX(-50%);
}

.banner-wave {
    position: absolute;
    bottom: 0;
    animation: gradientBG 120s linear infinite;
}

#wave2 {
    height: 100px;
    background: var(--bannerWave2);
    width: 400%;
    z-index: 5;
}

#wave1 {
    height: 84px;
    background: var(--bannerWave1);
    width: 200%;
    z-index: 10;
}
</style>