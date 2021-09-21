export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'studyCRM',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/style/index.scss",
    "~assets/style/page.scss",
    "~assets/style/tools.scss",
  ],

  // Global scss ( variables )
  styleResources: {
    scss: ["~assets/style/variables.scss"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      "~/plugins/modal",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      "~/components/base"
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/style-resources",
    ["vue-toastification/nuxt", {
      timeout: 5000,
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
