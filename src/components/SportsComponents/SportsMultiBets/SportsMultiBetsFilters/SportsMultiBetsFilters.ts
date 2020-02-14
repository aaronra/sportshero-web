import {Component, Prop, Vue} from 'vue-property-decorator';
import flatPickr from 'vue-flatpickr-component';
import {multiBetsStore} from '@/stores/MultiBetsStore';
import {sportsStore} from '@/stores/SportsStore';

@Component({
  name: 'SportsMultiBetsFilters',
  components: {
    flatPickr,
  },
})
export default class SportsMultiBetsFilters extends Vue {
  // Component Props
  @Prop(String) readonly tabTitle: string;
  // Data property
  releaseTime = null;
  startTime = null;
  closeBetting = null;
  config = {
    enableTime: true,
    altInput: true,
    dateFormat: 'Y-m-d H:i',
    time_24hr: false,
    timeFormat: 'H:i',
  };
  data: Array<{ id: number; type: string; }> = [];
  sportsList: Array<{ id: number; sport: string; }> = [];

  get selectedSport() {
    return sportsStore.selectedSport;
  }

  set selectedSport(selected) {
    sportsStore.setSelectedSport(selected);
  }

  get multiType() {
    return multiBetsStore.multiType;
  }

  set multiType(selected) {
    multiBetsStore.setMultiType(selected);
  }

  get isCardModalActive() {
    return multiBetsStore.isCardModalActive;
  }

  set isCardModalActive(isActive: boolean) {
    multiBetsStore.setCardModalActive(isActive);
  }


  // Lifecycle hook
  mounted() {

    this.data = [
      {
        id: 1,
        type: 'Winning Margin',
      },
      {
        id: 2,
        type: 'Prediction',
      },
      {
        id: 3,
        type: 'First Goal Scorer',
      },
    ];
    this.sportsList = [
      {
        id: 1,
        sport: 'Basketball',
      },
      {
        id: 2,
        sport: 'Soccer',
      },
    ];
  }

  // Component method
}
