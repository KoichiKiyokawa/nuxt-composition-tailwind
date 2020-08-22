<template lang="pug">
.flex
  Sidebar
  main.flex-grow
    Header
    .container.mx-auto
      Nuxt
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import Header from '@/components/organisms/Header.vue'
import Sidebar from '@/components/organisms/Sidebar.vue'

export default defineComponent({
  components: { Header, Sidebar },
})
</script>
