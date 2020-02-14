import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
    name: 'DashboardBets',
    components: {},
  filters: {
    addComma(val: { toLocaleString: () => void; }) {
      return val.toLocaleString();
    },
  },
})
export default class DashboardBets extends Vue {
    // Component Props
    @Prop({default: 'default value'}) readonly title!: string;
    @Prop({default: 0}) readonly betCount!: number;
    // Data property

    // Lifecycle hook

    // Component method
}
