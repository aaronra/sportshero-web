import {Component, Vue} from 'vue-property-decorator';
import MultiTableFilters from '@/components/sharedComponents/MultiTableFilters/MultiTableFilters.vue';
import SportsTabs from '@/components/SportsComponents/SportsTabs/SportsTabs.vue';

@Component({
    name: 'Sports',
    components: {
        MultiTableFilters,
        SportsTabs,
    },
})
export default class Sports extends Vue {
    // Component Props

    // Data property

    // Lifecycle hook

    // Component method
}
