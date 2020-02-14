import {Component, Vue} from 'vue-property-decorator';
import {mainStoreModule} from '@/stores/MainStore';
import SideNavMenuList from './SideNavMenuList/SideNavMenuList.vue';

const SideNavUserProfile = () => import(/* webpackChunkName: "SideNavUserProfile" */ './SideNavUserProfile/SideNavUserProfile.vue');
@Component({
  name: 'SideNav',
  components: {
    SideNavUserProfile,
    SideNavMenuList,
  },
})
export default class SideNav extends Vue {
  // Component Props

  // Data property

  // Lifecycle hook

  get navIsActive() {
    return mainStoreModule.navIsActive;
  }

  // Component method

}
