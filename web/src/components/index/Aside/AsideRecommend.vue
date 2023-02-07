<!-- 首页推荐 -->
<template>
    <div class="shadow-box aside-box">
        <div class="aside-box-title">
            <BookOpen />
            <span>推荐文章</span>
        </div>
        <div class="aside-post-list">
            <div
                v-for="item in recommendList"
                :key="item.id"
                class="aside-post"
            >
                <div class="detail">
                    <img
                        :src="item.articleCover"
                        class="cover"
                    >
                    <div class="title">
                        {{ item.articleTitle }}
                    </div>
                </div>
                <div class="date">
                    <CalendarThree />
                    {{ item.createTime }}
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { BookOpen, CalendarThree } from '@icon-park/vue-next';
const recommendList: any[] = [];

</script>
<style lang="scss">
.aside-post {
    .detail {
        display: flex;
    }

    .cover {
        height: 40px;
        object-fit: cover;
        width: 60px;
        border-radius: 0.2rem;
        margin-right: 8px;
        overflow: hidden;
    }

    .title {
        flex: 1;
        margin-left: 10px;
        overflow: hidden;
        /*将对象作为弹性伸缩盒子模型显示*/
        display: -webkit-box;
        /*设置子元素排列方式*/
        -webkit-box-orient: vertical;
        /*设置显示的行数，多出的部分会显示为...*/
        -webkit-line-clamp: 3;
    }

    .date {
        margin-top: 8px;
        margin-bottom: 20px;
        color: var(--greyFont);
        font-size: 12px;
    }
}
</style>