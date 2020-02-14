import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: 'AvatarProfileTable',
  components: {},
})
export default class AvatarProfileTable extends Vue {
  // Component Props
  @Prop(Array) readonly dataList: [] | [];
  // Data property
  tableProperty = {
    isEmpty: false,
    isBordered: false,
    isStriped: true,
    isNarrowed: false,
    isHoverable: false,
    isFocusable: false,
    isLoading: false,
    hasMobileCards: true,
    pagination: {
      paginated: true,
      perPage: 9,
    },
  };
  // Lifecycle hook

  // Component method
}
