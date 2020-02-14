import {Component, Prop, Vue} from 'vue-property-decorator';
import SportsMultiBetsFilters
  from '@/components/SportsComponents/SportsMultiBets/SportsMultiBetsFilters/SportsMultiBetsFilters.vue';
import SportsMultiBetsTabs
  from '@/components/SportsComponents/SportsMultiBets/SportsMultiBetsTabs/SportsMultiBetsTabs.vue';
import {racingStore} from '@/stores/RacingStore';

@Component({
  name: 'SportsMultiBets',
  components: {
    SportsMultiBetsFilters,
    SportsMultiBetsTabs,
  },
})
export default class SportsMultiBets extends Vue {
  // Component Props

  // Data property

  get multiType() {
    return racingStore.multiType;
  }

  // Lifecycle hook

  // Component method
}
