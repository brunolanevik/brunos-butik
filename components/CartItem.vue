<template>
  <div class="flex w-80 items-center gap-10 hover:bg-gray-200 mt-4">
    <img :src="image" class="w-16 h-16 rounded-full" />
    <p>{{title}}</p>
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
  },
}
</script>
