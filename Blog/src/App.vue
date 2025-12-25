<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <!-- <div class="wrapper">
       <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> 
    </div> -->
  <MainHeader />

  <RouterView />

  <MainFooter />
</template>

<style scoped></style>
