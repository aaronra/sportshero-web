import {Component, Vue} from 'vue-property-decorator';
import GuildTabs from './GuildTabs/GuildTabs.vue';
import {guildStore} from '@/stores/GuildStore';

const CreateGuild = () => import(/* webpackChunkName: "CreateGuild" */ '../GuildForm/GuildForm.vue');

@Component({
  name: 'GuildManagement',
  components: {
    CreateGuild,
    GuildTabs,
  },
})
export default class GuildManagement extends Vue {
  // Component Props

  // Data property

  // Lifecycle hook
  async mounted() {
    await guildStore.setEditMode(false);
  }

  // Component method
}
