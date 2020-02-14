import {Component, Prop, Vue} from 'vue-property-decorator';
import {racingStore} from '@/stores/RacingStore';
import flatPickr from 'vue-flatpickr-component';


@Component({
  name: 'MultiTableFilters',
  components: {
    flatPickr,
  },
})
export default class MultiTableFilters extends Vue {
  // Component Props
  @Prop(String) readonly tabTitle: string;
  // Data property
  date = null;
  data: Array<{ id: number; type: string; }> = [];
  location: Array<{ id: number; location: string; }> = [];
  unsubscribe: () => void;
  config = {
    enableTime: true,
    altInput: true,
    dateFormat: 'Y-m-d H:i',
    time_24hr: false,
    timeFormat: 'H:i',
  };

  // get | set
  get multiType() {
    return racingStore.multiType;
  }

  set multiType(selected) {
    racingStore.setMultiType(selected);
  }

  // Lifecycle hook
  created() {
    this.unsubscribe = this.$store.subscribe(async (mutation, state) => {
      console.log(mutation, 'mutate');
      if (mutation.type === 'racingStore/setMultiType') {
        if (this.tabTitle === 'racing' && this.multiType === 1) {
          racingStore.setRacingOngoingTableList([]);
          racingStore.setRacingPendingTableList([]);
          await racingStore.getPickAWinnerOngoingTableList();
          await racingStore.getPickAWinnerPendingTableList();
        } else if (this.tabTitle === 'racing' && this.multiType === 2) {
          racingStore.setRacingOngoingTableList([]);
          racingStore.setRacingPendingTableList([]);
          await racingStore.getSuperfectaOngoingTableList();
          await racingStore.getSuperfectaPendingTableList();
        }
      }
    });
  }

  async mounted() {
    racingStore.setMultiType(1);
    if (this.tabTitle === 'racing') {
      this.data = [
        {
          id: 1,
          type: 'Pick a Winner',
        },
        {
          id: 2,
          type: 'Superfecta',
        },
      ];
      await racingStore.getPickAWinnerOngoingTableList();
      await racingStore.getPickAWinnerPendingTableList();
    } else {
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
    }
    this.location = [
      {
        id: 1,
        location: 'Belmont',
      },
    ];
  }

  beforeDestroy() {
    this.unsubscribe();
  }

  // Component method
}
