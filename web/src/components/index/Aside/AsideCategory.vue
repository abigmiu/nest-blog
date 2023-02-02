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
                {{ category.sortName }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const categories: any[] = [];
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