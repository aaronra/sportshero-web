import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: 'FirstGoalScorerToolTip',
  components: {},
})
export default class FirstGoalScorerToolTip extends Vue {
  // Component Props
  @Prop(Object) readonly team: {};
  // Data property
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
  // Lifecycle hook

  // Component method
}
