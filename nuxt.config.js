export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bootcamps_de',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/reset.css', '@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components/base' }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-request',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // '@nuxtjs/apollo',
    '@nuxtjs/strapi',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {},

  // @nuxt-graphql-request https://github.com/Gomah/nuxt-graphql-request
  graphql: {
    clients: {
      default: {
        /**
         * The client endpoint url
         */
        endpoint:
          process.env.NODE_ENV === 'production'
            ? process.env.APOLLO_URL
            : process.env.APOLLO_URL_DEV,
        /**
         * Per-client options overrides
         * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
         */
        options: {},
      },
    },
  },

  // Apollo module configuration: https://apollo.vuejs.org/guide/apollo/
  // apollo: {
  //   clientConfigs: {
  //     default: '~/plugins/apollo-config.js',
  //     defaultOptions: {
  //       httpEndpoint: 'http://localhost:1337/graphql',
  //       browserHttpEndpoint: '/graphql',
  //       httpLinkOptions: {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     },
  //   },
  // },

  strapi: {
    host:
      process.env.NODE_ENV === 'production'
        ? process.env.APOLLO_URL
        : process.env.APOLLO_URL_DEV,
  },

  // router: {
  //   middleware: 'auth',
  // },

  // Tailwind module Defaults options
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // https://nuxtjs.org/tutorials/moving-from-nuxtjs-dotenv-to-runtime-config/
  // publicRuntimeConfig: {
  //   baseURL:
  //     process.env.NODE_ENV === 'production'
  //       ? process.env.baseUrlProd
  //       : process.env.baseUrlDev,
  //   graphURL:
  //     process.env.NODE_ENV === 'production'
  //       ? process.env.baseGqlUrlProd
  //       : process.env.baseGqlUrlDev,
  // },

  // privateRuntimeConfig: {},
};
