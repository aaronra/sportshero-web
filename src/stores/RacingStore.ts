import {VuexModule, Module, Mutation, Action} from 'vuex-class-modules';
import {HTTP} from '@/http-common';

@Module
class RacingStore extends VuexModule {
  // state
  multiType = 1;
  isLoading: boolean = false;
  racingOngoingTableList: Array<{}> = [];
  racingPendingTableList: Array<{}> = [];
  pickAWinnerLegList: Array<{}> = [];
  // getters

  // mutations
  @Mutation
  setMultiType(type: any) {
    this.multiType = type;
  }

  @Mutation
  setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  @Mutation
  setRacingOngoingTableList(dataList: Array<{}>) {
    this.racingOngoingTableList = dataList;
  }

  @Mutation
  setRacingPendingTableList(dataList: Array<{}>) {
    this.racingPendingTableList = dataList;
  }

  // racing-multi-bets
  @Mutation
  setPickAWinnerLegList(dataList: Array<{}>) {
    this.pickAWinnerLegList = dataList;
  }

  // actions
  @Action
  async getPickAWinnerOngoingTableList() {
    racingStore.setIsLoading(true);
    await HTTP.get('Racing/PickAWinner/racingOngoingPickAWinnerList.json').then((res) => {
      if (res.status === 200) {
        setTimeout(() => {
          this.setRacingOngoingTableList(res.data);
          this.setIsLoading(false);
        }, 3500);
      }
    }).catch((err) => {
      console.error(err);
    });
  }

  @Action
  async getPickAWinnerPendingTableList() {
    await HTTP.get('Racing/PickAWinner/racingPendingPickAWinnerList.json').then((res) => {
      if (res.status === 200) {
        setTimeout(() => {
          this.setRacingPendingTableList(res.data);
        }, 3500);
      }
    }).catch((err) => {
      this.setIsLoading(false);
      console.error(err);
    });
  }

  @Action
  async getSuperfectaOngoingTableList() {
    racingStore.setIsLoading(true);
    await HTTP.get('Racing/Superfecta/racingOngoingSuperfectaList.json').then((res) => {
      if (res.status === 200) {
        setTimeout(() => {
          this.setRacingOngoingTableList(res.data);
          this.setIsLoading(false);
        }, 3500);
      }
    }).catch((err) => {
      this.setIsLoading(false);
      console.error(err);
    });
  }

  @Action
  async getSuperfectaPendingTableList() {
    await HTTP.get('Racing/Superfecta/racingPendingSuperfectaList.json').then((res) => {
      if (res.status === 200) {
        setTimeout(() => {
          this.setRacingPendingTableList(res.data);
        }, 3500);
      }
    }).catch((err) => {
      console.error(err);
    });
  }

  // racing-multi-bets
  @Action
  async getPickAWinnerLegList() {
    await HTTP.get('Racing/PickAWinner/racingPickAWinnerLegList.json').then((res) => {
      if (res.status === 200) {
        setTimeout(() => {
          this.setPickAWinnerLegList(res.data);
        }, 3500);
      }
    }).catch((err) => {
      console.error(err);
    });
  }
}

// register module (could be in any file)
import store from '../store';

export const racingStore = new RacingStore({store, name: 'racingStore'});
