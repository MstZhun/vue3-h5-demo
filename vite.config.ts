import { fileURLToPath, URL } from 'node:url'

import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import AutoImport from 'unplugin-auto-import/vite'
// @ts-ignore
import postcsspxtoviewport from 'postcss-px-to-viewport'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        plugins: [
            vue(),
            vueJsx(),
            Components({
                resolvers: [VantResolver()]
            }),
            AutoImport({
                imports: ['vue', 'vue-router'],
                dts: 'src/auto-imports.d.ts'
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        css: {
            postcss: {
                plugins: [
                    postcsspxtoviewport({
                        viewportWidth: 375, // UI设计稿的宽度
                        selectorBlackList: ['ignore-'] // 指定不转换为视窗单位的类名
                    })
                ]
            }
        },
        server: {
            proxy: {
                '/api': {
                    // TODO：前缀等后端确认
                    target: env.VITE_HTTP_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            },
            open: true
        }
    }
})
