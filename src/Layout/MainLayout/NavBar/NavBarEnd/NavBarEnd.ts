import {Component, Prop, Vue} from 'vue-property-decorator';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {mainStoreModule} from '@/stores/MainStore';

@Component({
  name: 'NavBarEnd',
  components: {},
})
export default class NavBarEnd extends Vue {
  // Component Props

  // Data property
  loggedIn = false;

  // getters
  get currentUser() {
    return mainStoreModule.currentUser;
  }

  // Lifecycle hook
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });
  }

  // Component method
  async logOut() {
    await firebase.auth().signOut().then(() => {
      mainStoreModule.setCurrentUser({});
      return new Promise((resolve) => {
        resolve(this.$router.replace({name: 'Login'}));
      });
    }).catch((err) => {
      console.log(err, 'signOut');
    });
  }
}
