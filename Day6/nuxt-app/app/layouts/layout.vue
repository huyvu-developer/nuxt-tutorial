<template>
  <div>
    <Header />

    <!-- Thêm margin-top để tránh nội dung bị che bởi navbar cố định -->
    <main class="container mt-5 pt-4 mb-5">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>
