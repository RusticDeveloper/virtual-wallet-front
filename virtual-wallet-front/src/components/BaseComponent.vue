<template>
  <div class="flex flex-row justify-center">
    <h2 class="text-3xl font-semibold text-orange-500 underline">Define here the nav bar</h2>
  </div>
  <div>
    <h1 class="text-3xl font-bold underline">Here should be the sidebar</h1>

    <!-- aqui se muestran las rutas hijas-->
    <div class="w-screen">
      <router-view></router-view>
    </div>
  </div>
</template>
