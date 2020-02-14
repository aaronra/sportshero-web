import {Component, Vue} from 'vue-property-decorator';
import MultiTableFilters from '@/components/sharedComponents/MultiTableFilters/MultiTableFilters.vue';

const RacingTabs = () => import(/* webpackChunkName: "RacingTabs" */ '@/components/RacingComponents/RacingTabs/RacingTabs.vue');
@Component({
  name: 'Racing',
  components: {
    MultiTableFilters,
    RacingTabs,
  },
})
export default class Racing extends Vue {
  // Component Props

  // Data property

  // Lifecycle hook

  // Component method
}
