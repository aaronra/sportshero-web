import {Component, Prop, Vue} from 'vue-property-decorator';
import {dashboardStore} from '@/stores/DashboardStore';

const DashboardUpcomingTable = () => import(/* webpackChunkName: "DashboardUpcomingTable" */ './DashboardUpcomingTable/DashboardUpcomingTable.vue');

@Component({
  name: 'DashboardUpcomings',
  components: {
    DashboardUpcomingTable,
  },
})
export default class DashboardUpcomings extends Vue {
  // Component Props
  @Prop(String) readonly title: string | undefined;

  // Data property

  get dataList() {
    return (this.title === 'Racing') ? dashboardStore.upcomingRacingList : dashboardStore.upcomingSportsList;
  }

  // Lifecycle hook

  // Component method
}
