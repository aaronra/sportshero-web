import {VuexModule, Module, Mutation, Action} from 'vuex-class-modules';
import {HTTP} from '@/http-common';

@Module
class DashboardStore extends VuexModule {
  // state
  upcomingRacingList = [];
  upcomingSportsList = [];
  dashboardSummary = {};
  dashboardTrends = null;
  // getters

  // mutations
  @Mutation
  setUpcomingRacingList(dataList: any) {
    this.upcomingRacingList = dataList;
  }

  @Mutation
  setUpcomingSportsList(dataList: any) {
    this.upcomingSportsList = dataList;
  }

  @Mutation
  setDashboardSummary(data: any) {
    this.dashboardSummary = data;
  }

  @Mutation
  setDashboardTrends(data: any) {
    this.dashboardTrends = data;
  }

  // actions
  @Action
  async getUpcomingRacingList() {
    await HTTP.get('Dashboard/upcomingRacingList.json').then((res) => {
      if (res.status === 200) {
        setTimeout(() => {
          this.setUpcomingRacingList(res.data);
        }, 3000);
      }
    }).catch((err) => {
      console.error(err);
    });
  }

  @Action
  async getUpcomingSportsList() {
    await HTTP.get('Dashboard/upcomingSportsList.json').then((res) => {
      if (res.status === 200) {
        setTimeout(() => {
          this.setUpcomingSportsList(res.data);
        }, 4000);
      }
    }).catch((err) => {
      console.error(err);
    });
  }

  @Action
  async getDashboardSummary() {
    const result = await HTTP.get('Dashboard/dashboardSummary.json');
    setTimeout(() => {
      this.setDashboardSummary(result.data);
    }, 3000);
  }

  @Action
  async getDashboardTrends() {
    const result = await HTTP.get('Dashboard/dashboardTrends.json');
    setTimeout(() => {
      this.setDashboardTrends(result.data);
    }, 5000);
  }
}

// register module (could be in any file)
import store from '../store';

export const dashboardStore = new DashboardStore({store, name: 'dashboardStore'});
