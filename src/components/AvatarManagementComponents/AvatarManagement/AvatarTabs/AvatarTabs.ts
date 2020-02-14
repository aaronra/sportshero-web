import {Component, Vue} from 'vue-property-decorator';
import AvatarList from './AvatarList/AvatarList';

@Component({
  name: 'AvatarTabs',
  components: {
    AvatarList,
  },
})
export default class AvatarTabs extends Vue {
  // Component Props
  activeTab = 0;
  // Data property
  avatarPixelList = [
    'Pixels/1.png',
    'Pixels/2.png',
    'Pixels/3.png',
    'Pixels/4.png',
    'Pixels/5.png',
    'Pixels/6.png',
    'Pixels/7.png',
    'Pixels/8.png',
    'Pixels/9.png',
    'Pixels/10.png',
    'Pixels/11.png',
  ];
  avatarUpgradedList = [
    'Upgraded/1.png',
    'Upgraded/2.png',
    'Upgraded/3.png',
    'Upgraded/4.png',
    'Upgraded/5.png',
    'Upgraded/6.png',
    'Upgraded/7.png',
    'Upgraded/8.png',
    'Upgraded/9.png',
    'Upgraded/10.png',
    'Upgraded/11.png',
    'Upgraded/12.png',
    'Upgraded/13.png',
  ];
  // Lifecycle hook

  // Component method
}
