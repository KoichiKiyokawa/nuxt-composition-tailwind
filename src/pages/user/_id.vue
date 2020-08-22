<template lang="pug">
  p Your id is {{id}}.
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { route } = useContext()
    const { id } = route.value.params

    return { id }
  },
})
</script>
