<script setup>
const cart = useState('cart', () => [])
</script>
<template>
  <div class="cursor-pointer relative" >
    <x-badge    outlined
                animated
                position="top" align="right"
    v-if="cart.length > 0">

      <ShoppingBagIcon class="h-10 w-10 " @click="toggle"></ShoppingBagIcon>
      <template #content>
        {{cart.length}}
      </template>
    </x-badge>
    <ShoppingBagIcon class="h-10 w-10 " @click="toggle" v-else></ShoppingBagIcon>

    <div class="absolute rounded drop-shadow right-0 top-10 bg-white p-4" v-if="show">
      <p class="mb-4 font-semibold">Varukorg: </p>
      <CartItem :title="item.name" :image="item.thumbnail" v-for="item in cart"></CartItem>
    </div>
  </div>
</template>
<script>
import {ShoppingBagIcon} from '@heroicons/vue/24/solid'
import CartItem from "./CartItem";

export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  },
  components: {CartItem, ShoppingBagIcon}
}
</script>
