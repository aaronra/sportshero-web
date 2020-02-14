import {Component, Vue} from 'vue-property-decorator';
import MultiTypeAddModal from './MultiTypeAddModal/MultiTypeAddModal.vue';
import EditGameModal from './EditGameModal/EditGameModal.vue';
import {multiBetsStore} from '@/stores/MultiBetsStore';
import {sportsStore} from '@/stores/SportsStore';
import FirstGoalScorerToolTip from './FirstGoalScorer/FirstGoalScorerToolTip/FirstGoalScorerToolTip.vue';

@Component({
  name: 'SportsMultiTypeTableList',
  components: {
    MultiTypeAddModal,
    EditGameModal,
    FirstGoalScorerToolTip,
  },
})
export default class SportsMultiTypeTableList extends Vue {
  // Component Props

  dataList: any = [];
  // Data property
  isEditCardModalActive = false;
  tableProperty = {
    isEmpty: false,
    isBordered: false,
    isStriped: true,
    isNarrowed: false,
    isHoverable: false,
    isFocusable: false,
    isLoading: false,
    hasMobileCards: true,
    pagination: {
      paginated: true,
      perPage: 9,
    },
  };

  // Computed
  get multiType() {
    return multiBetsStore.multiType;
  }

  get selectedSport() {
    return sportsStore.selectedSport;
  }

  get isCardModalActive() {
    return multiBetsStore.isCardModalActive;
  }

  set isCardModalActive(isActive: boolean) {
    multiBetsStore.setCardModalActive(isActive);
  }

  // Lifecycle hook
  mounted() {
    this.dataList = [
      {
        id: 1,
        avatar: 'https://bulma.io/images/placeholders/32x32.png',
        team1: 'Toronto Raptors',
        team2: 'New Orleans Pelicans',
      }, {
        id: 2,
        avatar: 'https://bulma.io/images/placeholders/32x32.png',
        team1: 'Toronto Raptors',
        team2: 'New Orleans Pelicans',
      }, {
        id: 3,
        avatar: 'https://bulma.io/images/placeholders/32x32.png',
        team1: 'Toronto Raptors',
        team2: 'New Orleans Pelicans',
      },

    ];
  }

  // Component method
}
