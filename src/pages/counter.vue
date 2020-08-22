<template lang="pug">
.text-center
  p.text-lg {{count}}
  button.btn.bg-blue-500(@click="increment")
    | +1
  button.btn.bg-red-500.ml-2(@click="decrement")
    | -1
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { useCounter } from '@/compositions/counter'

export default defineComponent({
  setup() {
    return {
      ...useCounter(),
    }
  },
})
</script>

<style lang="sass" scoped>
.btn
  @apply text-white font-bold py-2 px-4 rounded
</style>
