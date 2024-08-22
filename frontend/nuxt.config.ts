// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vesp/nuxt-fontawesome"],
  fontawesome: {
    icons: {
      solid: ['book', 'magnifying-glass'],
      regular: ['moon', 'sun']
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          width: {
            '144': '36rem'
          }
        }
      }      
    }
  }
})