// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: true },
  // plugins: ['~/plugins/bootstrap.client.js'],
  // css: [
  //   'bootstrap/dist/css/bootstrap.min.css'
  // ],
  nitro: {
    preset: 'node',
  },
  modules: ['@pinia/nuxt'],
  imports: {
    dirs: ['stores'], // tự động import tất cả store trong /stores
    imports: [
      {
        from: 'pinia',
        name: 'defineStore',
        as: 'defineStore', // bạn có thể đổi alias nếu muốn
      },
    ],
  },
})
