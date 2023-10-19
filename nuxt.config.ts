// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: false }
  app: {
    head: {
      title: 'Nuxt App Starter',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width-device-width, initial-scale-1'},
        {hid: 'description', name: 'description', content: 'Nuxt app starter kit'}
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
