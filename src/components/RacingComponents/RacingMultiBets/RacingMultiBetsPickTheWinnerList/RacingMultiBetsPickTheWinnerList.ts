import {Component, Vue} from 'vue-property-decorator';
import AddPickTheWinnerModal from './AddPickTheWinnerModal/AddPickTheWinnerModal.vue';
import {racingStore} from '@/stores/RacingStore';

@Component({
  name: 'RacingMultiBetsPickTheWinnerList',
  components: {
    AddPickTheWinnerModal,
  },
})
export default class RacingMultiBetsPickTheWinnerList extends Vue {
  // Component Props

  // Data property
  isCardModalActive = false;

  // get
  get raceDetailList() {
    return racingStore.pickAWinnerLegList;
  }

  // Lifecycle hook
  async mounted() {
    await racingStore.getPickAWinnerLegList();
  }

  // Component method

  closeModal(value: boolean) {
    this.$swal({
      type: 'success',
      title: 'Pick A Winner has been Successfully Added!',
      allowOutsideClick: false,
    }).then((result) => {
      if (result.value) {
        this.isCardModalActive = value;
      }
    });
  }
}
