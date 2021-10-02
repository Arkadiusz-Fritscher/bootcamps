export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bootcamps_de',
    htmlAttrs: {
      lang: 'en',
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
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components/base' }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Apollo module configuration: https://apollo.vuejs.org/guide/apollo/
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          'https://api-eu-central-1.graphcms.com/v2/cku8bj6wm3la501zee9rxekrg/master',
        httpLinkOptions: {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzMwOTIzNTksImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrdThiajZ3bTNsYTUwMXplZTlyeGVrcmcvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYjUyNWJlMmYtNTQ4OS00NWJjLWEwZDktMjY5ODBlNDJlN2RkIiwianRpIjoiY2t1OGQweDJ3M255eTAxeXpidGVmNDQwaiJ9.ASztbkPmr-VN9OQw_QC3D-ZYvC-WfLxFfFa0NznYnEIQvD15OAlgKcN4IKsLEEEbgJsrxG1LIk8HYolapy6CAxpt2firCbG29XmkQQj5dzZj1q5qruupqAhyEIV2A5Y4-qFXIn-RfhZz37CZ5cXu5y3bmyuK_ZQbq3rZkJsKFoFl7TyEdySa3FyO5WsP4-_fSQr3aWrj7VAK4EcB_bB7OrnmvyFxskQKsGfnP7A8YbWptxOCrM7hDgzQBIiihDx77OBjtpbCID1FnnwHEd8xOPX76JqKXKJeZoa-X7QvEdBQ0GyVUE-1eDdqcjcHRDhwM_XEVdoKAwe35s1YWCZ39F0fwgWAOB6Wp_zeuHPijKQROhPiqXTlEJ4B7-n3bDdTPjbYMmGsOcxpGYxtHc_ChaRcIClOSpepHPfTRAoG-qTVFDBLyKDgo1Wa8y7nQ3VKyJKKsUKjbUjET593VPrsGOBikAdYMNcR1cqSAUZS-cr4j0GfkLg4kGQKEGm4AJHhsX6U1FgoXUXr6L1QhyArko0fE_B-jN-k0al5bk3QswhuQEJ0dum61KXFtHC6cX7r-_vX2YCJpkQO-olzEFX8UBMiqpox3ywFABZcYmxRR7T7fhvcqbfcQfGfYrGa6L4ENvoN9LmBTpaaVz3UPBGw9Ak65r6fhAr2Erbl6B6eLq0',
          },
        },
      },
    },
  },

  // Tailwind module configuration: https://tailwindcss.nuxtjs.org/options
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },

  styleResources: {
    scss: [
      './assets/scss/main.scss',
      './assets/scss/colors.scss',
      './assets/scss/mixins.scss',
    ],
    hoistUseStatements: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
