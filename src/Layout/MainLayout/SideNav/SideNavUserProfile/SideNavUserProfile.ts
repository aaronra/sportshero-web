import {Component, Vue} from 'vue-property-decorator';
import {mainStoreModule} from '@/stores/MainStore';

@Component({
  name: 'SideNavUserProfile',
  components: {},
})
export default class SideNavUserProfile extends Vue {
  // Component Props

  // Data property

  //
  get currentUser() {
    return mainStoreModule.currentUser;
  }

  // Lifecycle hook

  // Component method
}
