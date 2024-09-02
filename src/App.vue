<script setup>

import NavBar from "@/components/NavBar.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import BodyComponent from "@/components/BodyComponent.vue";
import DevelopmentFooter from "@/components/DevelopmentFooter.vue";
</script>

<template>
  <header class="bg-gradient-to-t from-[#001F2A] to-[#EFFBFF]">
    <NavBar/>
    <HeaderComponent/>
  </header>
  <main class="bg-deep-back">
    <BodyComponent/>
  </main>
  <footer>
    <DevelopmentFooter/>
  </footer>
</template>

<style scoped>

</style>
