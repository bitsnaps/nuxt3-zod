// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@picocss/pico/css/pico.min.css'],
  typescript: {
    // VSCode: This is if you have enabled Take Over Mode or installed the TypeScript Vue Plugin (Volar),
    shim: false
  },
  routeRules: {
    '/about': { static: true },
    // A dynamic route to be refreshed each 60 seconds
    '/posts/**': { swr: 60 },
    // A server API with CORS enabled
    // '/api/**': { cors: true }
    // Leave everything at the client side
    // '/admin/**': { ssr: false }
    // Redirect to a page
    // '/profile/**': { redirect : '/login' }
  }
})
