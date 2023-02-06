<!-- 首页背景图片 -->
<template>
    <div
        class="home-bg"
        :class="{ 'home-bg__error': loadError }"
    >
        <img
            v-show="!loadError"
            class="cover"
            src="https://s1.ax1x.com/2022/12/13/z5V07F.jpg"
            @error="onError"
        >
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const loadError = ref(false);
const onError = () => {
    console.log('on Error');
    loadError.value = true;
};
</script>
<style lang="scss">
.home-bg {
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: -1;

    &::before {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .2);
        content: '';
    }

    .cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__error {
        background-color: var(--lightGreen);
    }
}
</style>