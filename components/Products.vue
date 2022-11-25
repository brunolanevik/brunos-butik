<template>
  <div >
    <div v-if="pending" class="flex gap-5 flex-wrap justify-around">
      <loading-product></loading-product>
      <loading-product></loading-product>
      <loading-product></loading-product>
      <loading-product></loading-product>
      <loading-product></loading-product>
      <loading-product></loading-product>
      <loading-product></loading-product>
      <loading-product></loading-product>
    </div>
    <div class="flex gap-5 flex-wrap justify-around" v-else>
      <product :key="product.id" :product="product" :image="product.thumbnail" :description="product.description" :title="product.name" v-for="product in products.results" />
    </div>
  </div>
</template>

<script setup>
const { pending, data: products } = useLazyFetch('https://global.occtoo.com/iveo/iveoApp/v1/productwithcotton')
</script>