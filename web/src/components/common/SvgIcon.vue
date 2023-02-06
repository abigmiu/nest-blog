<template>
    <svg
        aria-hidden="true"
        class="svg-icon"
    >
        <use
            :xlink:href="symbolId"
            :fill="color"
        />
    </svg>
</template>
<script lang="ts" setup>
import { defineProps, withDefaults, computed } from 'vue';

interface IProps {
    prefix?: string;
    iconName: string;
    color?: string;
}
const props = withDefaults(defineProps<IProps>(), {
    prefix: 'icon',
    color: '#333',
});

const symbolId = computed(() => `#${props.prefix}-${props.iconName}`);
</script>
<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>