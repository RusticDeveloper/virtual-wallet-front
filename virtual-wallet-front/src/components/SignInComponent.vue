<script setup></script>
<script>
export default {
  data: function () {
    return {
      phone: null,
      password: null,
      codigoPais: null,
      paises: [
        { name: 'Ecuador', code: '+593' },
        { name: 'Brazil', code: '+55' },
        { name: 'Colombia', code: '+57' },
        { name: 'Venezuela', code: '+58' },
        { name: 'El Salvador', code: '+503' }
      ]
    }
  }
}
</script>

<template>
  <form @submit.prevent="login">
    <Fieldset class="formContainer">
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

      <divider />
      <span class="grid gap-4 grid-cols-2">
      <Button label="Ingresar" text raised rounded />
      <Button label="registrarse" severity="secondary" rounded />
    </span>
    </Fieldset>
  </form>
</template>

<style scoped>
.formContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 3;
}
</style>
