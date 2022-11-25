<template>
  <div v-bind:style="{'background-image': 'url(' + src+ ')'}" class="w-full bg-cover bg-center h-fit">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
  },

}
</script>
