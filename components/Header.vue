<template>
  <div class="fixed top-0 left-0 right-0 h-20 drop-shadow-md w-full bg-white z-10">
    <x-container class="flex items-center justify-between">
      <div class="flex items-center">
        <nuxt-link to="/" class="mr-20"><img class="h-20" src="/logo.png"></nuxt-link>
        <div class="flex gap-10">
          <nuxt-link :to="'/'">Hem</nuxt-link>
          <nuxt-link :to="'/about'">Om</nuxt-link>
        </div>
      </div>

      <cart></cart>
    </x-container>

  </div>
</template>