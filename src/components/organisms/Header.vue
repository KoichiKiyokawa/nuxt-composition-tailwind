<template lang="pug">
nav.flex.items-center.bg-teal-500.p-4.pl-6
  a(@click="toggleSidebar")
    Hamburger
  nuxt-link.text-xl.text-white(to="/") Nuxt+CompositionAPI+TailwindCSS
  nuxt-link.text-gray-300.ml-4(to="/counter") counter
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
// import { getModule } from 'vuex-module-decorators'

import Hamburger from '@/components/atoms/Hamburger.vue'
// import SidebarStore from '@/store/sidebar'

export default defineComponent({
  components: { Hamburger },
  setup() {
    // const SidebarModule = getModule(SidebarStore)
    const { store } = useContext()
    const toggleSidebar = () => {
      // SidebarModule.toggle()
      store.commit('sidebar/toggle')
    }
    return {
      toggleSidebar,
    }
  },
})
</script>
