import { colors } from '@indielayer/ui'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            'tailwindcss/nesting': {},
        },
    },
    "nitro": {
        "output": {
            dir: 'output',
            serverDir: 'output/server',
            publicDir: 'output/public'
        }
    },
    modules: [
        ['@indielayer/ui/nuxt', {
            prefix: 'X',
            theme: {
                colors: {
                    primary: colors.emerald,
                    secondary: colors.slate,
                    success: colors.green,
                    warning: colors.yellow,
                    error: colors.red,
                },
            }
        }],
    ],
})