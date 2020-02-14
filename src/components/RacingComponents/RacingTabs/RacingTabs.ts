import {Component, Vue} from 'vue-property-decorator';
import MultiTableList from '@/components/sharedComponents/MultiTableList/MultiTableList.vue';
import {racingStore} from '@/stores/RacingStore';

@Component({
  name: 'RacingTabs',
  components: {
    MultiTableList,
  },
})
export default class RacingTabs extends Vue {
  // Component Props
  activeTab = 0;

  // Data property
  get racingOngoingTableList() {
    return racingStore.racingOngoingTableList;
  }

  get racingPendingTableList() {
    return racingStore.racingPendingTableList;
  }

  // Lifecycle hook

  // Component method
}
