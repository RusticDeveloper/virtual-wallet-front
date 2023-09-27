/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'
import './assets/tailwind.css'
// routing components
import {createRouter, createWebHashHistory} from 'vue-router'
import BaseComponent from './components/BaseComponent.vue'
import MainPage from './components/MainPage.vue'
import SignInComponent from './components/SignInComponent.vue'
import SignUpComponent from './components/SignUpComponent.vue'
import TermsPolicy from './components/common/TermsPolicy.vue'

// captcha
import VueClientRecaptcha from 'vue-client-recaptcha'
import { VueReCaptcha } from 'vue-recaptcha-v3'

// primevue imports
// styles
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-indigo/theme.css'
// components
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tooltip from 'primevue/tooltip'
import Toast from 'primevue/toast'
import Skeleton from 'primevue/skeleton'
import Password from 'primevue/password'
import InputNumber from 'primevue/inputnumber'
import InputMask from 'primevue/inputmask'
import Divider from 'primevue/divider';
import Toolbar from 'primevue/toolbar';
import Dialog from 'primevue/dialog'
import Fieldset from 'primevue/fieldset'
import Panel from 'primevue/panel'
import Sidebar from 'primevue/sidebar';
import Checkbox from 'primevue/checkbox';


// axios importion for back-front comunication
// import { axios } from "axios";


import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
const app = createApp(App)
//configuration
app.use(PrimeVue, {
  ripple: true,
  locale: {
    accept: 'aceptar',
    reject: 'rechazar',
    signin: 'iniciar sesión',
    signup: 'registrarse'
  }
})
//componets to use in the app
app.component('InputText', InputText)
app.component('Dropdown', Dropdown)
app.component('Button', Button)
app.component('Card', Card)
app.component('Toast', Toast)
app.component('Skeleton', Skeleton)
app.component('Password', Password)
app.component('InputNumber', InputNumber)
app.component('InputMask', InputMask)
app.component('Divider', Divider)
app.component('Toolbar',Toolbar)
app.component('Dialog',Dialog)
app.component('Fieldset',Fieldset);
app.component('Panel',Panel);
app.component('Sidebar',Sidebar);
app.component('Checkbox',Checkbox);
app.directive('tooltip', Tooltip)

// local catcha
app.component("VueClientRecaptcha", VueClientRecaptcha); 

//configuracion de rutas
const routes = [
  {
    path: '/',
    component: BaseComponent,
    children: [
      {
        path: '',
        component: MainPage,
      },
      {
        path: 'signin',
        component: SignInComponent,
        name: 'signin'
      },
      {
        path: 'signup',
        component: SignUpComponent,
        name: 'signup '
      },
      {
        path: 'termsPolicy',
        component: TermsPolicy,
        name: 'terms '
      }
    ]
  }
]
// instancia del router
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})


// recaptca from google
app.use(VueReCaptcha, { siteKey: '6LeBG08oAAAAAHa5mL0lDywAVSiwjV5Vv5MfysgS' })
//routing usage
app.use(router)
// axios


app.mount('#app')
