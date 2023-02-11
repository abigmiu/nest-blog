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
        // server: {
        //     proxy: {
        //         '/api': {
        //             target: 'http://127.0.0.1:3005',
        //             changeOrigin: true,
        //         }
        //     }
        // }
    },
    css: [
        '@/assets/styles/_variable.css',
        '@/assets/styles/reset.css',
        '@/assets/styles/animation.css',
        '@/assets/styles/common.css',
        '@icon-park/vue-next/styles/index.css',
    ],
    modules: [
        '@vueuse/nuxt',
        '@pinia/nuxt',
    ],

    // nitro: {
    //     devProxy: {
    //         '/devApi': {
    //             target: 'http://127.0.0.1:3005/',
    //             changeOrigin: true,
    //             prependPath: true,
    //             rewrite: (path: string) => path.replace(/^\/devApi/, ''),
    //         },
    //     },
    // },
});
