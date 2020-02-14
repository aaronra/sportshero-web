import {Component, Vue} from 'vue-property-decorator';
import {dashboardStore} from '@/stores/DashboardStore';
import {DashboardBets, DashboardTrends, DashboardUpcomings} from '@/components/DashboardComponents';

@Component({
  name: 'Dashboard',
  components: {
    DashboardBets,
    DashboardTrends,
    DashboardUpcomings,
  },
})
export default class Dashboard extends Vue {
  // Component Props

  // Data property

  // getters
  get dashboardSummary() {
    return dashboardStore.dashboardSummary;
  }

  // Lifecycle hook
  async mounted() {
    await dashboardStore.getUpcomingRacingList();
    await dashboardStore.getUpcomingSportsList();
    await dashboardStore.getDashboardSummary();
  }

  // Component method


}
