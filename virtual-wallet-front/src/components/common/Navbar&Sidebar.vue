<template>
  <!-- this component represent the tootbar for the whole project -->
  <Toolbar>
    <template #start>
        <Button icon="pi pi-bars" severity="secondary" text  @click="visible=true"/>
    </template>
    
    <template #end>
        <Button icon="pi pi-user" severity="secondary" text  />
    </template>
  </Toolbar>

  <div class="flex card justify-center">
    <Sidebar v-model:visible="visible" position="left">
    
    <h2>configurar la barra lateral</h2>
  </Sidebar>
</div>
</template>
<script setup>
import { ref } from 'vue'
// eslint-disable-next-line no-unused-vars
const visible = ref(false)

</script>
