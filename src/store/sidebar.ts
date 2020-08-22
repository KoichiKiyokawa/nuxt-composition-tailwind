import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ name: 'sidebar', stateFactory: true, namespaced: true })
export default class SidebarStore extends VuexModule {
  isOpen = true

  @Mutation
  toggle() {
    this.isOpen = !this.isOpen
  }
}
