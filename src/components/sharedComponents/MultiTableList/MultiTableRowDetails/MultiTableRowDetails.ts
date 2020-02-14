import {Component, Prop, Vue} from 'vue-property-decorator';
import RacingMultiBetsPickTheWinnerList
    from '@/components/RacingComponents/RacingMultiBets/RacingMultiBetsPickTheWinnerList/RacingMultiBetsPickTheWinnerList.vue';
import RacingSuperpectaList
    from '@/components/RacingComponents/RacingMultiBets/RacingSuperpectaList/RacingSuperpectaList.vue';
import {racingStore} from '@/stores/RacingStore';

@Component({
    name: 'MultiTableRowDetails',
    components: {
        RacingMultiBetsPickTheWinnerList,
        RacingSuperpectaList,
    },
})
export default class MultiTableRowDetails extends Vue {
    // Component Props
    @Prop(Object) readonly data: any;

    // Data property
    get multiType() {
        return racingStore.multiType;
    }

    // Lifecycle hook

    // Component method
}
