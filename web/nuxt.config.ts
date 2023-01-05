import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    vite: {
        plugins: [svgLoader()],
    },
    css: [
        '@/assets/styles/_variable.css',
        '@/assets/styles/reset.css',
        '@/assets/styles/animation.css',
        '@/assets/styles/common.css'
    ],
    modules: ['@vueuse/nuxt']
});
