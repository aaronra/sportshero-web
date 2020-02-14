import {Component, Prop, Vue} from 'vue-property-decorator';
import {guildStore} from '@/stores/GuildStore';
import {GuildModel} from '@/dataModels/GuildModel';

@Component({
  name: 'GuildForm',
  components: {},
})
export default class GuildForm extends Vue {
  // Component Props
  @Prop() guildInfo: GuildModel;

  // Data property
  avatar = {
    name: null,
    dateTime: null,
    file: null,
  };

  get info() {
    return Object.assign(new GuildModel(), this.guildInfo);
  }

  get isEditMode() {
    return guildStore.isEditMode;
  }

  // Lifecycle hook

  // Component method
  updateGuild() {
    this.$swal({
      type: 'success',
      title: 'Guild has been Updated!',
      allowOutsideClick: false,
    }).then((result) => {
      if (result.value) {
        guildStore.setEditMode(false);
        this.$router.push({name: 'GuildManagement'});
      }
    });
  }
}
