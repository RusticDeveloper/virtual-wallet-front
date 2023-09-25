<script setup></script>
<script>
export default {
  methods:{
    async submit(){
      await this.$recaptcha()
      
      // Execute reCAPTCHA with action "login".
      const checkTokern = await this.$recaptcha('login')
      console.log(checkTokern)
    }
  },
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
  <form @submit.prevent="login" class="container mx-auto px-4 md:px-32 lg:px-64">
    <Fieldset class="flex-1 items-center justify-around">
      <template #legend>
        <div class="flex items-center">
          <span class="pi pi-sign-in mr-2"></span>
          <span class="font-bold text-lg m-0 text-cyan-900">Ingreso al sistema</span>
        </div>
      </template>

      <span class="text-stone-600 font-bold italic text-xs">
        Ingrese su número de telefono
      </span>
      <br />
      <Dropdown
        v-model="codigoPais"
        editable
        :options="paises"
        optionLabel="name"
        placeholder="Selecciona tu país"
        class="w-full md:w-1/4 xl:1/3"
      />

      <InputMask
        id="basic"
        v-model="phone"
        mask="99-999-9999"
        placeholder="99-999-999"
        class="w-full md:w-3/4 lg:w-2/3"
      />

      <br /><br />

      <span class="p-float-label w-full">
        <Password v-model="password" inputId="password" toggleMask :feedback="false" />
        <label for="password" class="text-stone-600 font-bold italic text-xs">ingrese su contraseña</label>
      </span>

      <divider />
      <span class="grid gap-4 grid-cols-2">
        <Button label="Ingresar" text raised rounded />
        <Button label="registrarse" severity="secondary" rounded  text raised/>
      </span>
    </Fieldset>
  </form>
</template>

<style scoped></style>
