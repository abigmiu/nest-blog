<!-- 全局头部 -->
<template>
    <Transition name="fade-in-linear">
        <div
            v-show="visible"
            class="layout-header between-flex"
            :class="{ white: isOverHalf }"
        >
            <div class="title">
                Normally
            </div>
            <div>
                <ul class="menus">
                    <li
                        v-for="menu in menus"
                        :key="menu.id"
                        class="menu-item"
                    >
                        <component :is="menu.icon" />
                        <span class="menu-title">{{ menu.title }}</span>
                    </li>
                </ul>
                <div class="avatar" />
            </div>
        </div>
    </Transition>
</template>
<script lang="ts" setup>
import type { ILayoutHeaderMenu } from '@/types/layout';
import { useThrottleFn } from '@vueuse/core';
import { onMounted, onBeforeUnmount, ref } from 'vue';
import type { Component } from 'vue';

const staticPath = '/src/assets/svgs/header';
const svgs: Record<string, Component> = import.meta.glob('/src/assets/svgs/header/*.svg', {
    eager: true,
    as: 'component',
});

const menus: ILayoutHeaderMenu[] = [
    {
        id: 1,
        icon: svgs[`${staticPath}/index.svg`],
        title: '首页',
    },
    {
        id: 2,
        icon: svgs[`${staticPath}/document.svg`],
        title: '生活倒影',
    },
    {
        id: 3,
        icon: svgs[`${staticPath}/link.svg`],
        title: '社交',
    },
    {
        id: 4,
        icon: svgs[`${staticPath}/message.svg`],
        title: '留言',
    },
    {
        id: 5,
        icon: svgs[`${staticPath}/baby.svg`],
        title: '关于',
    },
];

const isOverHalf = ref(false);
let oldScrollTop = 0;
const visible = ref(true);
/** 页面滚动事件 */
const onScroll = useThrottleFn(
    () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        // 往下滑不显示菜单栏
        visible.value = scrollTop < oldScrollTop;
        oldScrollTop = scrollTop;
        // 是否滚动超过了屏幕的一半
        isOverHalf.value = scrollTop > window.innerHeight / 2;
    },
    200,
    true
);
onMounted(() => {
    window.addEventListener('scroll', onScroll);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
});
</script>
<style lang="scss">
.layout-header {
    width: 100%;
    height: 60px;
    color: var(--white);
    /* 固定位置，不随滚动条滚动 */
    position: fixed;
    z-index: 100;
    /* 禁止选中文字 */
    user-select: none;
    transition: all 0.3s ease-in-out;

    &.white {
        background: var(--toolbarBackground);
        color: var(--toolbarFont);
        box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);

        &:hover {
            background: var(--toolbarBackground);
        }
    }

    &:hover {
        background: var(--translucent);
        box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);
    }

    .title {
        margin-left: 30px;
        cursor: pointer;
    }

    .menus {
        display: flex;
    }

    .menu-item {
        margin: 0 12px;
        font-size: 17px;
        height: 60px;
        line-height: 60px;
        position: relative;
        cursor: pointer;

        &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            height: 6px;
            background-color: var(--themeBackground);
            width: 100%;
            max-width: 0;
            transition: max-width 0.25s ease-in-out;
        }

        &:hover {
            color: var(--themeBackground);

            &::after {
                max-width: 100%;
            }
        }
    }

    .menu-title {
        padding-left: 0.5em;
    }
}
</style>
