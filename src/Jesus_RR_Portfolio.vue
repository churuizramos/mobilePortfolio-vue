<script setup>

import HeaderComponent from "@/components/HeaderComponent.vue";
import BodyComponent from "@/components/BodyComponent.vue";
import DevelopmentFooter from "@/components/DevelopmentFooter.vue";
</script>

<template>
  <header>
    <HeaderComponent/>
  </header>
  <main>
    <BodyComponent/>
  </main>
  <footer class="m-6">
    <DevelopmentFooter/>
  </footer>
</template>

<style scoped>

</style>
