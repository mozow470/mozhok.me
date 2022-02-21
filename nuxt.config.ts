import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    privateRuntimeConfig: {
      diaryURL:'https://api.notion.com/v1/databases/ad023003677c4d29bd8c75872c154b68/query',
      token:'secret_T7wfS6SFsdyGnMBEPeDH19XEywx6UKrrrTf6f8VPx4n',
    },
    css: ["@/assets/css/tailwind.css"],
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },

    
})
