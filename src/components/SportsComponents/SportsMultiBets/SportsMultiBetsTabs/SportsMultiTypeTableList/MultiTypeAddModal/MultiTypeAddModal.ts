import {Component, Prop, Vue} from 'vue-property-decorator';
import {racingStore} from '@/stores/RacingStore';

@Component({
  name: 'MultiTypeAddModal',
  components: {},
})
export default class MultiTypeAddModal extends Vue {
  // Component Props
  @Prop(Number) readonly multiType: number;
  @Prop(String) readonly sports: string;
  // Data property
  data = [
    'Grafton, NSW',
    'Belton',
  ];
  gameList = [
    {
      game: 'Game 1',
      avatar: 'https://bulma.io/images/placeholders/32x32.png',
      team1: 'Toronto Raptops',
      team2: 'New Orleans Pelicans',
    },
    {
      game: 'Game 2',
      avatar: 'https://bulma.io/images/placeholders/32x32.png',
      team1: 'Toronto Raptops',
      team2: 'New Orleans Pelicans',
    },
    {
      game: 'Game 3',
      avatar: 'https://bulma.io/images/placeholders/32x32.png',
      team1: 'Toronto Raptops',
      team2: 'New Orleans Pelicans',
    },
    {
      game: 'Game 4',
      avatar: 'https://bulma.io/images/placeholders/32x32.png',
      team1: 'Toronto Raptops',
      team2: 'New Orleans Pelicans',
    },
    {
      game: 'Game 5',
      avatar: 'https://bulma.io/images/placeholders/32x32.png',
      team1: 'Toronto Raptops',
      team2: 'New Orleans Pelicans',
    },
  ];
  selectedGames = [];
  name = '';
  selected = null;
  // Lifecycle hook

  // Computed
  get numberOfGame() {
    return this.selectedGames.length;
  }

  get typeOfMulti() {
    if (this.multiType === 1) {
      return 'Winning Margin';
    } else if (this.multiType === 2) {
      return 'Prediction';
    } else if (this.multiType === 3) {
      return 'First Goal Scorer';
    }
  }

  // Component method
  isWideModal() {
    return this.multiType === 2;
  }

  filteredDataArray() {
    return this.data.filter((option) => {
      return option
        .toString()
        .toLowerCase()
        .indexOf(this.name.toLowerCase()) >= 0;
    });
  }
}
