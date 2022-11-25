<template>
  <div class="w-80 mb-4 block">
    <img :alt="title" class="w-full h-80 mb-8 rounded" :src="image">
    <h3 class="w-full mb-4 text-2xl">{{title}}</h3>
    <content class="w-full">{{description}}</content>
    <AddToCart :product="product"></AddToCart>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    description: {
      type: String,
      default: ''
    },
    product: {
      type: Object,
      default: () => {}
    }
  },
}
</script>
