<template>
    <div>
        <div class="article-head my-animation-slide-top">
            <img :src="source.cover" class="article-image" />

            <div class="article-info-container">
                <div class="article-title">{{ source.title }}</div>
                <div class="article-info">
                    <span class="info-item">
                        <svg-icon icon-name="hulu"></svg-icon>
                        {{ source.commentsNum }}
                    </span>
                    <span class="info-item">
                        <svg-icon icon-name="calendar"></svg-icon>
                        {{ source.updateAt }}
                    </span>
                    <span class="info-item">
                        <svg-icon icon-name="fire"></svg-icon>
                        {{ source.commentsNum }}
                    </span>
                    <span class="info-item">
                        <svg-icon icon-name="comment"></svg-icon>
                        {{ source.commentsNum }}
                    </span>
                    <span class="info-item">
                        <svg-icon icon-name="heart"></svg-icon>
                        {{ source.commentsNum }}
                    </span>
                </div>
            </div>
        </div>


        <div class="article-container my-animation-slide-bottom">
            <div class="entry-content" v-html="contentForHTML"></div>
            <div id="toc" class="toc"></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import SvgIcon from '@/components/common/SvgIcon.vue';
import { cFetch } from '~~/src/apis/http';
import { IArticleDetailResponse } from '~~/src/types/article';
import { IResponse } from '~~/src/types/base';
import MarkdownIt from 'markdown-it'
import tocbot from 'tocbot'

const route = useRoute()

const source = reactive<Partial<IArticleDetailResponse>>({})
const contentForHTML = ref('')

const fetchData = async () => {
    const { id } = route.params;
    if (typeof id === 'string' && /^\d+$/.test(id)) {
        const { data } = await cFetch<IResponse<IArticleDetailResponse>>(`/api/content/${id}`)
        if (data.value) {
            Object.assign(source, data.value.data)

            renderContent(data.value.data.text);
        }
    }
}

/** 渲染内容 */
const renderContent = (content: string) => {
    contentForHTML.value = new MarkdownIt({ breaks: true }).render(content);
    nextTick(() => {
        initToc();
    })
}

/** 渲染标题 */
const initToc = () => {
    tocbot.init({
        tocSelector: '#toc',
        contentSelector: '.entry-content',
        headingSelector: 'h1, h2, h3, h4, h5, h6',
        scrollSmooth: true,
        fixedSidebarOffset: 'auto',
        scrollSmoothOffset: -100,
        hasInnerContainers: false
    })
}
fetchData()
</script>
<style lang="scss">
@import url('@/assets/styles/markdown.css');

</style>
<style lang="scss" scoped>
.article-head {
    height: 40vh;
    position: relative;

    &::before {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--miniMask);
        content: "";
    }
}

.article-info-container {
    position: absolute;
    bottom: 15px;
    left: 20%;
    color: var(--white);
}

.article-title {
    font-size: 28px;
    margin-bottom: 15px;
}

.article-info {
    font-size: 14px;
    user-select: none;

    .info-item {
        margin-right: 6px;

        .i-icon {
            margin-right: 5px;
        }
    }
}

.article-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
}
</style>