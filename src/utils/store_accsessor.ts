/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Sidebar from '@/store/sidebar'

let SidebarStore: Sidebar
function initialiseStores(store: Store<any>): void {
  SidebarStore = getModule(Sidebar, store)
}

export { initialiseStores, SidebarStore }
