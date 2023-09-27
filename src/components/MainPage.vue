<script setup>
import Divider from 'primevue/divider'

defineProps({})
</script>

<template>
  <div class="actionscontainer">
    <router-link to="signin"> 
      <Button label="Ingresar" text raised rounded />
    </router-link>

    <Divider layout="vertical" />
    <router-link to="signup">
      <Button label="Registrarse" severity="secondary" rounded />
    </router-link>
    
  </div>
</template>

<style scoped>
.actionscontainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
