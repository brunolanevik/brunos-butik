<script setup>
import {useFetch} from "nuxt/app";

const route = useRoute()
const test = [{id: 1}]

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
let product;
const { pending, data: products } = useLazyFetch('https://global.occtoo.com/iveo/iveoApp/v1/productwithcotton')
watch(products, (loadedProducts) => {
  product = loadedProducts.results.filter(product => product.id === route.params.id)[0]
})
</script>
<template>
  <div>
    <div v-if="pending">

    </div>
    <div class="flex gap-10" v-else>
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

