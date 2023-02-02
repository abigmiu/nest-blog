<template>
    <div class="shadow-box aside-box aside-author">
        <div>
            <img
                :src="webInfo.avatar"
                alt=""
            >
        </div>
        <div class="name">
            {{ webInfo.webName }}
        </div>
        <div class="info-box" />
        <div class="collection-btn">
            朋友圈
        </div>
    </div>
</template>
<script lang="ts" setup>
const webInfo = {};
</script>
<style lang="scss">
.aside-author {
    background: linear-gradient(-45deg, #e8d8b9, #eccec5, #a3e9eb, #bdbdf0, #eec1ea);
    background-size: 400% 400%;
    animation: gradientBG 10s ease infinite;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .avatar {
        width: 120px;
        height: 120px;
        overflow: hidden;
        object-fit: cover;
        border-radius: 9999px;
    }

    .name {
        font-size: 30px;
        font-weight: bold;
        margin: 20px 0;
    }

    .collection-btn {
        position: relative;
        margin-top: 12px;
        background: var(--lightGreen);
        cursor: pointer;
        width: 65%;
        height: 35px;
        border-radius: 1rem;
        text-align: center;
        line-height: 35px;
        color: var(--white);
        overflow: hidden;
        z-index: 1;
        margin-bottom: 25px;

        &::before {
            background: var(--gradualRed);
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            content: "";
            transform: scaleX(0);
            transform-origin: 0;
            transition: transform 0.5s ease-out;
            transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
            border-radius: 1rem;
            z-index: -1;
        }

        &:hover::before {
            transform: scaleX(1);
        }
    }
}
</style>
