import {Component, Vue} from 'vue-property-decorator';
import AddNewAvatar from './AddNewAvatar/AddNewAvatar';
import AvatarTabs from './AvatarTabs/AvatarTabs';

@Component({
  name: 'AvatarManagementComponent',
  components: {
    AddNewAvatar,
    AvatarTabs,
  },
})
export default class AvatarManagementComponent extends Vue {
  // Component Props

  // Data property

  // Lifecycle hook

  // Component method
}
