import {Component, Vue} from 'vue-property-decorator';
import {dashboardStore} from '@/stores/DashboardStore';

const LineBarChart = () => import(/* webpackChunkName: "LineBarChart" */ './LineBarChart/LineBarChart.vue');

@Component({
  name: 'DashboardTrends',
  components: {
    LineBarChart,
  },

})
export default class DashboardTrends extends Vue {
  isPublic = true;

  get dashboardTrends() {
    return dashboardStore.dashboardTrends;
  }

  async mounted() {
    await dashboardStore.getDashboardTrends();
  }
}
