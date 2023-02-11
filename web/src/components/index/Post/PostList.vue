<!-- 首页文章列表 -->
<template>
    <div>
        <div class="discover-title">
            <svg-icon icon-name="discover" />发现
        </div>
        <div class="post-list">
            <PostItem
                v-for="(item, index) in articles"
                :key="item.id"
                :source="item"
                :is-even="(index + 1) % 2 === 0"
            />
        </div>
        <div class="list-footer">
            <div
                v-if="articles.length >= totalSize"
                class="finished"
            >
                ~~到底啦~~
            </div>
            <div
                v-else
                class="next-btn"
            >
                下一页
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import SvgIcon from '@/components/common/SvgIcon.vue';
import PostItem from './PostItem.vue';
import { IArticleResponseItem } from '~~/src/types/article';
import { IResponse } from '~~/src/types/base';
import { cFetch } from '~~/src/apis/http';

const articles = reactive<IArticleResponseItem[]>([]);

let totalSize = 0;
const query = {
    page: 1,
    size: 10,
};

const fetchData = async () => {
    const { data } = await cFetch<IResponse<IArticleResponseItem[]>>('/api/content/page', {
        params: query,
    });
    if (data.value && data.value.data) {
        // articles.length = 0;
        articles.push(...data.value.data);
    }
};

fetchData();

const router = useRouter()
console.log(router)

</script>
<style lang="scss">
.discover-title {
    color: var(--greyFont);
    border-bottom: 1px dashed var(--lightGray);
    padding-bottom: 5px;
    margin-bottom: 50px;
}

.post-list {
    max-width: 780px;
    margin: 0 auto;
}

.list-footer {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.next-btn {
    padding: 13px 15px;
    border: 1px solid var(--lightGray);
    border-radius: 3rem;
    color: var(--greyFont);
    width: 100px;
    user-select: none;
    cursor: pointer;
    text-align: center;
}

.next-btn:hover {
    border: 1px solid var(--themeBackground);
    color: var(--themeBackground);
    box-shadow: 0 0 5px var(--themeBackground);
}
</style>