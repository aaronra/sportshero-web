import {Component, Vue} from 'vue-property-decorator';
import GuildProfileInfo from './GuildProfileInfo/GuildProfileInfo';
import GuildUserListTable from './GuildUserListTable/GuildUserListTable';
import CreateGuild from '../GuildForm/GuildForm.vue';
import {guildStore} from '@/stores/GuildStore';

@Component({
  name: 'GuildProfile',
  components: {
    GuildProfileInfo,
    CreateGuild,
    GuildUserListTable,
  },
})
export default class GuildProfile extends Vue {
  // Component Props

  // Data property`
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

  get isEditMode() {
    return guildStore.isEditMode;
  }

  guildInfo = {
    name: 'Guild 1',
    activeTime: 'Mainly during AFL season',
    bet: 11,
    amount: 12,
    memberLimit: 69,
    currentMembers: 68,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n' +
      'been\n' +
      'the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a\n' +
      'galley\n' +
      'of type and scrambled it to make a type specimen book. It has survived not only five\n' +
      'centuries,\n' +
      'but also the leap into electronic typesetting, remaining essentially unchanged. It was\n' +
      'popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum\n' +
      'passages,\n' +
      'and more recently with desktop publishing software like Aldus PageMaker including versions\n' +
      'of\n' +
      'Lorem Ipsum',
  };
  // Lifecycle hook

  // Component method
}
