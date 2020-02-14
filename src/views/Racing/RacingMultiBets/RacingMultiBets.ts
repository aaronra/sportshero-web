import {Component, Vue} from 'vue-property-decorator';
import {racingStore} from '@/stores/RacingStore';

const RacingMultiBetsPickTheWinnerList = () =>
  import(/* webpackChunkName:"RacingMultiBetsPickTheWinnerList" */ '@/components/RacingComponents/RacingMultiBets/RacingMultiBetsPickTheWinnerList/RacingMultiBetsPickTheWinnerList.vue');
const RacingSuperpectaList = () =>
  import(/* webpackChunkName:"RacingSuperpectaList" */ '@/components/RacingComponents/RacingMultiBets/RacingSuperpectaList/RacingSuperpectaList.vue');
const RacingMultiBetsFilters = () =>
  import(/* webpackChunkName:"RacingMultiBetsFilters" */ '@/components/RacingComponents/RacingMultiBets/RacingMultiBetsFilters/RacingMultiBetsFilters.vue');
const AddSuperpectaModal = () =>
  import(/* webpackChunkName:"AddSuperpectaModal" */ '@/components/RacingComponents/RacingMultiBets/RacingSuperpectaList/AddSuperpectaModal/AddSuperpectaModal.vue');

@Component({
  name: 'RacingMultiBets',
  components: {
    RacingMultiBetsFilters,
    RacingMultiBetsPickTheWinnerList,
    RacingSuperpectaList,
    AddSuperpectaModal,
  },
})
export default class RacingMultiBets extends Vue {
  // Component Props

  // Data property
  isCardModalActive = false;

  get multiType() {
    return racingStore.multiType;
  }

  // Lifecycle hook

  // Component method
}
