<!-- 布局Footer -->
<template>
  <div class="footer-wrapper">
    <footer class="footer">
      <div class="icp">
        本网站由 <a
          :href="origin"
          target="_blank"
        >{{ website }}</a> 强力支持
      </div>
    </footer>
  </div>
</template>
<script lang="ts" setup>
const origin = ref('');
const website = ref('网站');

onMounted(() => {
    origin.value = window.location.origin;
});
</script>
<style lang="scss">
.footer-wrapper {
    background: var(--background);
}

.footer {
    border-radius: 1.5rem 1.5rem 0 0;
    background: var(--gradientBG);
    text-align: center;
    color: var(--white);
    background-size: 300% 300%;
    animation: gradientBG 10s ease infinite;

    .footer-title {
        padding-top: 10px;
        font-size: 16px;
    }

    .icp,
    .icp a {
        color: var(--maxGreyFont);
        font-size: 13px;
    }

    .icp {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .icp a {
        text-decoration: none;
        transition: all 0.3s;
    }

    .icp a:hover {
        color: var(--themeBackground);
    }
}
</style>
