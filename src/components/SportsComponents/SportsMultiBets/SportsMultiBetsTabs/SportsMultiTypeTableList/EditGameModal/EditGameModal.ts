import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: 'EditGameModal',
  components: {},
})
export default class EditGameModal extends Vue {
  // Component Props
  @Prop(String) readonly sports: string;
  // Data property
  game = {
    game: 'Game 5',
    avatar: 'https://bulma.io/images/placeholders/32x32.png',
    team1: 'Toronto Raptops',
    team2: 'New Orleans Pelicans',
  };
  teamPlayers = [
    {
      playerList: [
        {
          firstName: 'Jensen',
          lastName: 'Wade',
        },
        {
          firstName: 'Branch',
          lastName: 'Hines',
        },
        {
          firstName: 'Terrel',
          lastName: 'Murray',
        },
        {
          firstName: 'Graciela',
          lastName: 'Mitchell',
        },
        {
          firstName: 'Ines',
          lastName: 'Campbell',
        },
      ],
    },
    {
      playerList: [
        {
          firstName: 'Martin',
          lastName: 'Peck',
        },
        {
          firstName: 'Combs',
          lastName: 'Juarez',
        },
        {
          firstName: 'Marcia',
          lastName: 'Greer',
        },
        {
          firstName: 'Mendoza',
          lastName: 'Carver',
        },
        {
          firstName: 'Drake',
          lastName: 'Morin',
        },
      ],
    },
  ];
  selectedTeamPlayers = [{
    playerList: [],
  },
    {
      playerList: [],
    }];
  // Lifecycle hook

  // Component method
}
