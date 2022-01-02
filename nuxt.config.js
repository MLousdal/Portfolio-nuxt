export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mads Lousdal | Frontend udvikler',
    htmlAttrs: {
      lang: 'da',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Mads Lousdal er en passioneret frontend udvikler, med en god forståelse for ui/ux design',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:title', content: 'Mads Lousdal | Frontend udvikler' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.madslousdal.dk/' },
      {
        property: 'og:description',
        content:
          'Mads Lousdal er en passioneret frontend udvikler, med en god forståelse for ui/ux design',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss', 'aos/dist/aos.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
