import {VuexModule, Module, Mutation, Action} from 'vuex-class-modules';

@Module
class GuildStore extends VuexModule {
  // state
  isEditMode: boolean = false;
  // getters

  // mutations
  @Mutation
  setEditMode(isEditMode: boolean) {
    this.isEditMode = isEditMode;
  }

  // actions

}

// register module (could be in any file)
import store from '../store';

export const guildStore = new GuildStore({store, name: 'guildStore'});
