import {VuexModule, Module, Mutation, Action} from 'vuex-class-modules';

@Module
class SportsStore extends VuexModule {
  // state
  selectedSport = {
    id: 1,
    sport: 'Basketball',
  };
  // getters

  // mutations

  @Mutation
  setSelectedSport(selected: any) {
    this.selectedSport = selected;
  }

  // actions

}

// register module (could be in any file)
import store from '../store';

export const sportsStore = new SportsStore({store, name: 'sportsStore'});
