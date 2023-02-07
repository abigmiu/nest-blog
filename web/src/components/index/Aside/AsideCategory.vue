<template>
    <div class="shadow-box aside-box">
        <div class="aside-box-title">
            <span>文章分类</span>
        </div>
        <div>
            <div
                v-for="category in categories"
                :key="category.id"
                class="category-item"
            >
                {{ category.name }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { IResponse } from '~~/src/types/base';
import type { IMetaResponse } from '~~/src/types/meta';
const categories = reactive<IMetaResponse[]>([]);

const { data } = await useFetch<IResponse<IMetaResponse[]>>('/api/meta', {
    query: {
        type: 'category'
    }
})
console.log(data);
if (data.value) {
    categories.push(...data.value.data)
}
</script>
<style lang="scss">
.category-item {
    border-radius: 1rem;
    margin-bottom: 15px;
    line-height: 30px;
    transition: all 0.3s;

    &:hover {
        background: var(--themeBackground);
        padding: 2px 15px;
        cursor: pointer;
        color: var(--white);
    }
}
</style>