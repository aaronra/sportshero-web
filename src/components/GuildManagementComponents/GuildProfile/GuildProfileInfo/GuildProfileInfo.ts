import {Component, Prop, Vue} from 'vue-property-decorator';
import {guildStore} from '@/stores/GuildStore';

@Component({
  name: 'GuildProfileInfo',
  components: {},
})
export default class GuildProfileInfo extends Vue {
  // Component Props
  @Prop(Object) readonly guildInfo:  | undefined;
  // Data property

  // Lifecycle hook

  // Component method
  toggleEditMode() {
    guildStore.setEditMode(true);
  }
}
