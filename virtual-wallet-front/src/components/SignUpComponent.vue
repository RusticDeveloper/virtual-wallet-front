<script setup></script>
<script>
export default {
  data: function () {
    return {
      phone: null,
      phoneCode: null,
      captcha: null,
      password: null,
      passwordCheck: null,
      invitationCode: 'kd5df5gf3',
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
  <form @submit.prevent="login" class="container mx-auto px-4 md:px-20">
    <Fieldset>
      <template #legend>
        <div class="flex items-center">
          <span class="pi pi-users mr-2"></span>
          <span class="font-bold text-lg m-0 text-cyan-900">Registro de usuario</span>
        </div>
      </template>

      <div class="flex items-center justify-between flex-col sm:flex-row">
        <div class="w-full sm:w-3/6">
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
            class="w-4/6 lg:w-5/12 "
          />
          <InputMask id="basic" v-model="phone" mask="99-999-9999" placeholder="99-999-999" />

          <!-- cptcha -->
          <br ><br>
          <span class="text-stone-600 font-bold italic text-xs">
            <InputText
              v-model="phoneCode"
              placeholder="Codigo enviado al telefono"
              class="text-stone-600 font-bold italic text-xs"
            /> 
            <Button label="Obtener codigo" severity="info" outlined />
            <br>
            <small>verifique el codigo</small>
          </span>
          <!-- codigos de verificacion -->
          <br />
          <span class="text-stone-600 font-bold italic text-xs">
            <InputText
              v-model="captcha"
              placeholder="ingrese lo que se ve en la imagen"
              class="text-stone-600 font-bold italic text-xs"
            /> <br>
            <small>ingrese el captcha</small>
          </span>
          <img src="" alt="imagen captcha" width="80%" height="">
        </div>

        <div class="w-full sm:w-2/5">
          
          <span class="p-float-label">
            <Password v-model="password" inputId="password" toggleMask :feedback="false" />
            <label for="password" class="text-stone-600 font-bold italic text-xs">contraseña</label>
          </span>
          <br />
          <span class="p-float-label">
            <Password
              v-model="passwordCheck"
              inputId="passwordCheck"
              toggleMask
              :feedback="false"
            />
            <label for="passwordCheck" class="text-stone-600 font-bold italic text-xs"
              >confirmación de contraseña
            </label>
          </span>
          <br />
          <span class="p-input-icon-left text-stone-600 font-bold italic text-xs">
            <i class="pi pi-arrow-right" />
            <InputText
              v-model="invitationCode"
              placeholder="codigo de invitación"
              class="text-stone-600 font-bold italic text-xs"
            />
            <br />
            <small>Ingrese el codigo de invitacion.</small>
          </span>
        </div>
      </div>
      <divider />
      <span class="grid gap-4 grid-cols-2">
        <Button label="Ingresar" text raised rounded />
        <Button label="registrarse" severity="secondary" rounded text raised />
      </span>
    </Fieldset>
  </form>
</template>

<style scoped></style>
