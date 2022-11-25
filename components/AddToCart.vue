<script setup>
const cart = useState('cart')
</script>
<template>
  <x-button class="w-full" color="primary" @click="cart.push(product)">Köp</x-button>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      test:[]
    }
  },
  methods: {
    add() {
      cartItems.push(this.product)
    }
  },
}
</script>
