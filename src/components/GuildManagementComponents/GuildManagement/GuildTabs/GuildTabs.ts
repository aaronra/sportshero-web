import {Component, Vue} from 'vue-property-decorator';
const GuildList = () => import(/* webpackChunkName: "AvatarList" */ './GuildList/GuildList.vue');


@Component({
  name: 'GuildTabs',
  components: {
    GuildList,
  },
})
export default class GuildTabs extends Vue {
  // Component Props
  activeTab = 0;
  // Data property

  // Lifecycle hook

  // Component method
}
