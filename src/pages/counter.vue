<template lang="pug">
div
  p {{count}}
  button.bg-blue-500.text-white.font-bold.py-2.px-4.rounded(@click="click")
    | +1
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const count = ref(0)
    const click = () => {
      count.value++
    }

    return {
      count,
      click,
    }
  },
})
</script>
