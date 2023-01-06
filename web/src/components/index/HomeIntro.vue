<template>
    <div class="intro-wrapper">
        <h1 class="title">
            教堂与坟墓
        </h1>
        <IndexPoemPrint />
        <IndexArrowWithWave />
    </div>
</template>

<style lang="scss" scoped>
.intro-wrapper {
    height: 100vh;
    position: relative;
    overflow-x: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title {
        color: var(--white);
        font-size: 40px;
    }
}
</style>