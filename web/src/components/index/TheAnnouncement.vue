<!-- 首页公告 -->
<template>
    <div class="announcement">
        <i class="fa fa-volume-up" aria-hidden="true" />

        <div v-if="notices.length">
            <p v-for="(notice, index) in notices" :key="index" class="content">
                {{ notice }}
            </p>
        </div>
        <div v-else>暂无公告</div>
    </div>
</template>
<script lang="ts" setup>
import { IResponse } from '~~/src/types/base';
const notices = reactive<string[]>([]);
const { data } = await useFetch<IResponse<string[]>>('/api/option/announcement')
if (data.value) {
    notices.push(...data.value.data)
}
</script>
<style lang="scss">
/* 放大 */
@keyframes scale {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}

.announcement {
    padding: 22px;
    border: 1px dashed var(--lightGray);
    color: var(--greyFont);
    border-radius: 10px;
    display: flex;
    max-width: 780px;
    margin: 40px auto 40px;
}

.announcement .fa {
    color: var(--themeBackground);
    font-size: 22px;
    margin: auto 0;
    animation: scale 0.8s ease-in-out infinite;
}

.announcement .content {
    margin-left: 20px;
    line-height: 30px;
}
</style>
