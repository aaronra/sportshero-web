import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: 'DashboardUpcomingTable',
  components: {},
})
export default class DashboardUpcomingTable extends Vue {
  // Component Props
  @Prop(Array) readonly dataList: any | undefined;
  // Data property

  tableProperty = {
    isEmpty: false,
    isBordered: false,
    isStriped: false,
    isNarrowed: true,
    isHoverable: false,
    isFocusable: false,
    hasMobileCards: true,
  };
  // Lifecycle hook

  // Component method
  getIconUrl(icon: string) {
    const iconUrl = require('@/assets/icons/' + icon + '.svg');
    return iconUrl;
  }
}
