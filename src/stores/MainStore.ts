import {VuexModule, Module, Mutation, Action} from 'vuex-class-modules';

@Module
class MainStoreModule extends VuexModule {
  // state
  navIsActive = true;
  firebaseUser: any = {};

  // getters
  get currentUser() {
    const user = this.firebaseUser.providerData[0];
    return user;
  }

  // mutations
  @Mutation
  toggleNav(navIsActive: boolean) {
    this.navIsActive = !navIsActive;
  }

  @Mutation
  setCurrentUser(currentUser: any) {
    this.firebaseUser = currentUser;
  }

  // actions
  @Action
  async loadCurrentUser(currentUser: any) {
    this.setCurrentUser(currentUser);
  }
}

// register module (could be in any file)
import store from '../store';
import * as firebase from 'firebase';


export const mainStoreModule = new MainStoreModule({store, name: 'mainStoreModule'});
