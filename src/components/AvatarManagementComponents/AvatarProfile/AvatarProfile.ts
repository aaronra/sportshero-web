import {Component, Vue} from 'vue-property-decorator';
import AvatarProfileInfo from './AvatarProfileInfo/AvatarProfileInfo';
import AvatarProfileTable from './AvatarProfileTable/AvatarProfileTable';
import AvatarProfileTrendsModal from './AvatarProfileTrendsModal/AvatarProfileTrendsModal';

@Component({
  name: 'AvatarProfile',
  components: {
    AvatarProfileInfo,
    AvatarProfileTable,
    AvatarProfileTrendsModal,
  },
})
export default class AvatarProfile extends Vue {
  // Component Props

  // Data property
  isAvatarProfileTrendsModalActive = false;
  dataList = [
    {
      user: 'Jay Turla',
      email: 'jayturla@gmail.com',
      dateGranted: 'May 20, 2016',
      winnings: '25',
    },
    {
      user: 'Sheila Guevarra',
      email: 'Shee@gmail.com',
      dateGranted: 'May 30, 2016',
      winnings: '30',
    },
    {
      user: 'Jay Turla',
      email: 'jayturla@gmail.com',
      dateGranted: 'May 20, 2016',
      winnings: '25',
    },
    {
      user: 'Sheila Guevarra',
      email: 'Shee@gmail.com',
      dateGranted: 'May 30, 2016',
      winnings: '30',
    },
    {
      user: 'Jay Turla',
      email: 'jayturla@gmail.com',
      dateGranted: 'May 20, 2016',
      winnings: '25',
    },
    {
      user: 'Sheila Guevarra',
      email: 'Shee@gmail.com',
      dateGranted: 'May 30, 2016',
      winnings: '30',
    },
  ];
  // Lifecycle hook

  // Component method
  showTrendModal() {
    this.isAvatarProfileTrendsModalActive = true;
  }
}
