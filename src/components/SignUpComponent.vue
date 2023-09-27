<script setup>
import { ref } from 'vue'
import axios from 'axios'

const phone = ref(null)
const phoneCode = ref(null)
const captcha = ref(null)
const password = ref(null)
const passwordCheck = ref(null)
const invitationCode = 'kd5df5gf3'
const codigoPais = ref(null)
const captchaCode = ref(null)
const isValid = ref(false)
const acuerdo = ref(false)

const paises = ref([
  { name: 'Ecuador', code: '+593' },
  { name: 'Brazil', code: '+55' },
  { name: 'Colombia', code: '+57' },
  { name: 'Venezuela', code: '+58' },
  { name: 'El Salvador', code: '+503' }
])

const getCaptchaCode = (value) => {
  captchaCode.value = value
}

const checkValidCaptcha = (value) => {
  isValid.value = value
  if (value) {
    alert('Your Captcha is valid now you can submit')
  }
}

// get vvalidation code
// const getValidationCode = await fetch()=>{
//   const url =''
//   const data ={}
//   const config ={}
//   axios.post()
// }
</script>

<template>
  <!-- return buttonn -->
  <span >
    <router-link to="/">
      <Button icon="pi pi-arrow-left" severity="secondary" text />
    </router-link>
  </span>
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
            class="w-4/6 lg:w-5/12"
          />
          <InputMask id="clientPhone" v-model="phone" mask="99-999-9999" placeholder="99-999-999" />

          <!-- codigos de verificacion -->
          <br /><br />
          <span class="text-stone-600 font-bold italic text-xs">
            <InputText
              v-model="phoneCode"
              placeholder="Codigo enviado al telefono"
              class="text-stone-600 font-bold italic text-xs"
            />
            <Button label="Obtener codigo" severity="info" outlined  />
            <br />
            <small>verifique el codigo</small>
          </span>
          <!-- cptcha -->
          <br />
          <span class="text-stone-600 font-bold italic text-xs flex justify-between">
            <InputText
              v-model="captcha"
              placeholder="ingrese lo que se ve en la imagen"
              class="text-stone-600 font-bold italic text-xs"
            />

            <VueClientRecaptcha
              :value="captcha"
              :count="5"
              @getCode="getCaptchaCode"
              @isValid="checkValidCaptcha"
              class="w-2/12 mx-auto"
            />
          </span>
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
      <br>
      <div>
        <Checkbox v-model="acuerdo" :binary="true" /> 
        <span class="ml-3">He leido y estoy de acuerdo con los </span>
        <router-link to="TermsPolicy" ><span class="text-blue-600 italic">terminos & condiciones</span></router-link>
        <!-- <Button label="terminos & condiciones"  link rounded class="text-sm"/> -->
      </div>
      <divider />
      <span class="grid gap-4 grid-cols-2">
        <Button label="Ingresar" text raised rounded />
        <Button label="registrarse" severity="secondary" rounded text raised />
      </span>
    </Fieldset>
  </form>
</template>

<style scoped>
@import url('/node_modules/vue-client-recaptcha/dist/style.css');
</style>
