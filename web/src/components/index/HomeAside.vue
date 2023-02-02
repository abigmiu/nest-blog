<template>
    <aside class="home-aside">
        <AsideAuthor />
        <AsideCategory />
        <AsideRecommend />
    </aside>
</template>
<script lang="ts" setup>
import AsideAuthor from './Aside/AsideAuthor.vue';
import AsideCategory from './Aside/AsideCategory.vue';
import AsideRecommend from './Aside/AsideRecommend.vue';
</script>
<style lang="scss">
.home-aside {
    width: 30%;
    margin-right: 40px;
    max-width: 300px;
}

.aside-box {
    padding: 25px;
    border-radius: 10px;
    margin-bottom: 40px;

    &-title {
        font-size: 18px;
        margin-bottom: 20px;

        .i-icon {
            color: var(--red);
            margin-right: 5px;
            animation: scale 1s ease-in-out infinite;
        }
    }
}
</style>
