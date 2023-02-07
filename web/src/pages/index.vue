<template>
    <IndexHomeBg />
    <IndexHomeIntro />
    <main class="home-main">
        <HomeAside />
        <div class="flex-1">
            <TheAnnouncement />
        </div>
    </main>
</template>
<script lang="ts" setup>
import HomeAside from '@/components/index/HomeAside.vue';
import TheAnnouncement from '@/components/index/TheAnnouncement.vue';
</script>
<style lang="scss">
.home-main {
    background: var(--background);
    padding: 20px 20px 40px 20px;
    margin: 0 auto;
    display: flex;
}
</style>