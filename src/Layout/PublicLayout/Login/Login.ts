import {Component, Vue} from 'vue-property-decorator';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  name: 'Login',
  components: {},
})
export default class Login extends Vue {
  // Component Props
  email = '';
  password = '';
  isLoading = false;
  isFullPage = true;
  // Data property

  // Lifecycle hook

  // Component method
  async login() {
    this.isLoading = true;
    await firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
      return new Promise((resolve) => {
        this.isLoading = false;
        resolve(this.$router.replace({name: 'Dashboard'}));
      });
    }).catch((err) => {
      this.isLoading = false;
      this.errorToast(err.message);
    });
  }

  errorToast(err: any) {
    this.$buefy.toast.open({
      message: err,
      type: 'is-danger',
    });
  }
}
