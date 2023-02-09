<!-- 首页文章子项 -->
<template>
    <div
        class="post-item shadow-box"
        :class="{ 'right': isEven }"
    >
        <div class="cover">
            <img
             
                alt=""
            >
        </div>
        <div class="content">
            <div class="post-meta">
                <i>
                    <svg-icon icon-name="calendar" />
                </i>

                发布于 {{ source.createAt }}
            </div>
            <h3 class="title">
                {{ source.title }}
            </h3>
            <div class="post-meta">
                <span>
                    <svg-icon icon-name="fire" /> {{ source.commentsNum }} 热度
                </span>
                <span>
                    <svg-icon icon-name="comment" /> {{ source.commentsNum }} 条评论
                </span>
                <span>
                    <svg-icon icon-name="heart" /> {{ source.commentsNum }} 点赞
                </span>
            </div>
            <div class="desc">
                {{ source.summary }}
            </div>
            <div class="label-wrapper">
                <div class="label">
                    <svg-icon icon-name="folder" />
                </div>
                <div class="label">
                    <svg-icon icon-name="label" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import SvgIcon from '@/components/common/SvgIcon.vue';
import { IArticleResponseItem } from '~~/src/types/article';

interface IProps {
    source: IArticleResponseItem,
    isEven: boolean;
}
const props = defineProps<IProps>();
</script>

<style lang="scss">
.post-item {
    margin-bottom: 40px;
    height: 300px;
    position: relative;
    display: flex;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;

    &.right {
        flex-direction: row-reverse;
    }

    .cover {
        width: 50%;
        height: 100%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1s;

            &:hover {
                transform: scale(1.2);
            }
        }
    }

    .content {
        flex: 1;
        padding: 20px 35px;
    }

    .title {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .post-meta {
        font-size: 12px;
        color: var(--greyFont);
    }

    .post-meta span:not(:last-child) {
        margin-right: 10px;
    }

    .desc {
        margin-top: 15px;
        font-size: 15px;
        line-height: 1.7;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }

    .label-wrapper {
        position: absolute;
        bottom: 20px;
        display: flex;
    }

    .label {
        padding: 3px 10px;
        background-color: var(--maxLightGray);
        border-radius: 3px;
        font-size: 14px;
        color: var(--greyFont);
        transition: all 0.3s;
        cursor: pointer;
        user-select: none;
        margin-right: 12px;

        &:hover {
            background-color: var(--themeBackground);
            color: var(--white);
        }
    }
}
</style>