<!-- 诗词动画 -->
<template>
    <div
        class="poem-print"
        @click="fetchData"
    >
        <h3 class="content">
            {{ content }}
        </h3>
    </div>
</template>
<script lang="ts" setup>
import type { IPoem } from '@/types/home';

import { onBeforeUnmount, onMounted, ref } from 'vue';

let poem = '人生得意须尽欢，莫使金樽空对月。';

const content = ref(poem);

let printTimer: number;
let delayTimer: number;
let printDesc = true; // 删除字
let currentLength = poem.length;

const printTimeout = 100;
const delayTimeout = 3000;

/** 逐字打印 */
const print = () => {
    printTimer = window.setInterval(() => {
        currentLength += printDesc ? -1 : 1;
        content.value = poem.slice(0, currentLength);
        if (currentLength === poem.length) {
            delayToPrint();
            printDesc = true;
        }
        if (currentLength === 0) {
            delayToPrint();
            printDesc = false;
        }
    }, printTimeout);
};
/** 延迟开始 */
const delayToPrint = () => {
    clearInterval(printTimer);
    delayTimer = window.setTimeout(() => {
        print();
    }, delayTimeout);
};

/** 清除所有定时器 */
const clearAllTimer = () => {
    clearTimeout(delayTimer);
    clearInterval(printTimer);
};

onMounted(() => delayToPrint());
onBeforeUnmount(() => clearAllTimer());

const fetchData = () => {
    clearAllTimer();
    content.value = '';

    $fetch<IPoem>('https://v1.jinrishici.com/all.json')
        .then((res) => {
            poem = res.content;
            currentLength = 0;
            printDesc = false;
            delayToPrint();
        }).catch(() => {
            content.value = '加载失败，请重试！';
        });
};
</script>
<style lang="scss" scoped>
.poem-print {
    cursor: pointer;
    color: var(--white);
    background: var(--translucent);
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;

    .content {
        &::after {
            content: "|";
            margin-left: 1px;
            animation: hideToShow .7s infinite;
            font-weight: 200;
        }
    }
}
</style>
