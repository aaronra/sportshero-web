import {VuexModule, Module, Mutation, Action} from 'vuex-class-modules';

@Module
class MultiBetsStore extends VuexModule {
  // state
  multiType = 1;
  isCardModalActive = false;
  // getters

  // mutations
  @Mutation
  setMultiType(type: any) {
    this.multiType = type;
  }

  @Mutation
  setCardModalActive(isActive: boolean) {
    this.isCardModalActive = isActive;
  }

  // actions

}

// register module (could be in any file)
import store from '../store';

export const multiBetsStore = new MultiBetsStore({store, name: 'multiBetsStore'});
