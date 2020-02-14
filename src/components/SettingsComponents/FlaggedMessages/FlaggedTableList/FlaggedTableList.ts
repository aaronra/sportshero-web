import {Component, Prop, Vue} from 'vue-property-decorator';
import {racingStore} from '@/stores/RacingStore';

@Component({
  name: 'FlaggedTableList',
  components: {},
})
export default class FlaggedTableList extends Vue {
  // Component Props
  @Prop(Array) readonly dataList: [] | [];
  // Data property
  $refs: {
    table: HTMLFormElement,
  };
  showDetailIcon = false;

  tableProperty = {
    isEmpty: false,
    isBordered: false,
    isStriped: true,
    isNarrowed: false,
    isHoverable: false,
    isFocusable: false,
    hasMobileCards: true,
    pagination: {
      paginated: true,
      perPage: 9,
    },
  };

  // get
  get isLoading() {
    return racingStore.isLoading;
  }

  // Lifecycle hook

  // Component method
  toggle(e: any, row: any) {
    e.target.classList.toggle('active');
    this.$refs.table.toggleDetails(row);
  }
}
