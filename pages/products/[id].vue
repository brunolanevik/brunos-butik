<script setup>
import {useFetch} from "nuxt/app";

const route = useRoute()
const test = [{id: 1}]
// When accessing /posts/1, route.params.id will be 1

let product;
const { pending, data: products } = useLazyFetch('https://global.occtoo.com/iveo/iveoApp/v1/productwithcotton')
watch(products, (loadedProducts) => {
  console.log(loadedProducts)
  product = loadedProducts.results.filter(product => product.id === route.params.id)[0]
})
</script>
<template>
  <div>
    <div class="flex gap-10" v-if="pending">
      <x-skeleton class="w-80 h-80"></x-skeleton>
      <div class="w-full">
        <x-skeleton class="w-full h-10 mb-4"></x-skeleton>
        <x-skeleton class="h-20 w-full mb-4"></x-skeleton>
        <x-skeleton class="h-20 w-full mb-4"></x-skeleton>
        <x-skeleton class="h-20 w-full mb-4"></x-skeleton>
      </div>
    </div>
    <div class="flex gap-10" v-else-if="typeof product !== 'undefined'">
      <img :src="product.thumbnail" class="w-80 h-80">
      <div>
        <h1 class="text-4xl mb-4">{{product.name}}</h1>
        <content>
          {{product.description}}
        </content>
        <div>
          <b>I lager</b>: {{product.onHand}}
        </div>
        <add-to-cart :product="product"></add-to-cart>
      </div>
    </div>
  </div>
</template>

