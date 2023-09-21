<script setup>
import Fieldset from 'primevue/fieldset';



</script>

<template>
<form @submit.prevent="login">
    <Fieldset >
      <template #legend>
        <div class="flex align-items-center text-primary">
          <span class="pi pi-sign-in mr-2"></span>
          <span class="font-bold text-lg margin-3">Ingreso al sistema</span>
        </div>
      </template>

      <Dropdown
        v-model="codigoPais"
        editable
        :options="paises"
        optionLabel="name"
        placeholder="Selecciona tu país"
        class="w-full md:w-14rem"
      />

      <InputMask id="basic" v-model="phone" mask="99-999-9999" placeholder="99-999-999" />
      <br><br>
      <span class="p-float-label">
        <Password v-model="password" inputId="password" toggleMask :feedback="false" />
        <label for="password">Password</label>
      </span>
      
      <Button label="registrarse" severity="secondary" rounded />
      <Button label="Ingresar" text raised rounded />

    </Fieldset>
  </form>

 
</template>

<style scoped>

</style>
