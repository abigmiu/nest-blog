import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    vite: {
        plugins: [
            createSvgIconsPlugin({
                iconDirs: [
                    path.resolve(process.cwd(), './src/assets/svgs'),
                ],
                symbolId: 'icon-[dir]-[name]',
                customDomId: '__svg__icons__dom__'
            })
        ],
    },
    css: [
        '@/assets/styles/_variable.css',
        '@/assets/styles/reset.css',
        '@/assets/styles/animation.css',
        '@/assets/styles/common.css'
    ],
    modules: [
        '@vueuse/nuxt',
    ]
});
