<script setup>
import Navbar from './common/Navbar&Sidebar.vue'

</script>
<template>
  <div class="w-screen">
  <Navbar />
  </div>
  <!-- aqui se muestran las rutas hijas-->
  <div class="w-screen">
    <router-view></router-view>
  </div>
</template>
