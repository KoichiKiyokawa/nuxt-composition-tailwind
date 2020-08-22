<template lang="pug">
.h-screen.shadow-2xl(:class="isOpen ? 'w-1/5' : 'w-0'")
  p hoge
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
// import { getModule } from 'vuex-module-decorators'

// import SidebarStore from '@/store/sidebar'

export default defineComponent({
  setup() {
    const { store } = useContext()
    // const SidebarModule = getModule(SidebarStore)
    return { isOpen: store.state.sidebar.isOpen }
  },
})
</script>
