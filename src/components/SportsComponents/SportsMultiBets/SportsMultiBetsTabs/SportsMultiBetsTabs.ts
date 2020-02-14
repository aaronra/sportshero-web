import {Component, Vue} from 'vue-property-decorator';
import SportsMultiTypeTableList
  from '@/components/SportsComponents/SportsMultiBets/SportsMultiBetsTabs/SportsMultiTypeTableList/SportsMultiTypeTableList.vue';
import {multiBetsStore} from '@/stores/MultiBetsStore';

@Component({
  name: 'SportsMultiBetsTabs',
  components: {
    SportsMultiTypeTableList,
  },
})
export default class SportsMultiBetsTabs extends Vue {
  // Component Props

  // Data property
  activeTab = 0;

  // getters
  get multiType() {
    return multiBetsStore.multiType;
  }

  // Lifecycle hook

  // Component method
}
