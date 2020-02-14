import {Component, Vue} from 'vue-property-decorator';

const FlaggedTableList = () => import(/* webpackChunkName:"FlaggedTableList" */ './FlaggedTableList/FlaggedTableList.vue');
@Component({
  name: 'FlaggedMessages',
  components: {
    FlaggedTableList,
  },
})
export default class FlaggedMessages extends Vue {
  // Component Props

  // Data property
  blockedList = [
    {
      from: 'User A',
      message: 'Bullying',
      dateSent: 'Dec 29, 2018',
      reason: 'Bad words',
      status: 'blocked',
    },
    {
      from: 'User B',
      message: 'Bullying',
      dateSent: 'Dec 29, 2018',
      reason: 'Bad words',
      status: 'blocked',
    },
    {
      from: 'User C',
      message: 'Bullying',
      dateSent: 'Dec 29, 2018',
      reason: 'Bad words',
      status: 'blocked',
    },
  ];
  unblockedList = [
    {
      from: 'User D',
      message: 'Bullying',
      dateSent: 'Dec 29, 2018',
      reason: 'Bad words',
      status: 'unblocked',
    },
    {
      from: 'User E',
      message: 'Bullying',
      dateSent: 'Dec 29, 2018',
      reason: 'Bad words',
      status: 'unblocked',
    },
    {
      from: 'User F',
      message: 'Bullying',
      dateSent: 'Dec 29, 2018',
      reason: 'Bad words',
      status: 'unblocked',
    },
  ];
  // Lifecycle hook

  // Component method
}
