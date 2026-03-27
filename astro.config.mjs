import { defineConfig } from 'astro/config'
import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ['en', 'es', 'fr'],
        defaultLocale: 'en',
        fallback: {
            es: 'en',
            fr: 'en',
        },
        routing: {
            prefixDefaultLocale: false,
            fallbackType: 'rewrite',
        },
    },
    adapter: node({ mode: 'middleware' }),
})
