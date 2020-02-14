import {Component, Vue} from 'vue-property-decorator';
import SideNav from '@/Layout/MainLayout/SideNav/SideNav.vue';
import NavBar from '@/Layout/MainLayout/NavBar/NavBar.vue';
import {mainStoreModule} from '@/stores/MainStore';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  name: 'MainLayout',
  components: {
    SideNav,
    NavBar,
  },
})
export default class MainLayout extends Vue {
  // Component Props

  // Data property

  // Lifecycle hook
  async created() {
    const currentUser = firebase.auth().currentUser;
    await mainStoreModule.loadCurrentUser(currentUser);
  }

  // Component method
  get navIsActive() {
    return mainStoreModule.navIsActive;
  }
}
