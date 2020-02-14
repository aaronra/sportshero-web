import {Component, Prop, Vue} from 'vue-property-decorator';
import {racingStore} from '@/stores/RacingStore';
import flatPickr from 'vue-flatpickr-component';

@Component({
    name: 'RacingMultiBetsFilters',
    components: {
        flatPickr,
    },
})
export default class RacingMultiBetsFilters extends Vue {
    // Component Props
    @Prop(String) readonly tabTitle: string;
    // Data property
    releaseTime = null;
    startTime = null;
    closeBetting = null;
    config = {
        enableTime: true,
        altInput: true,
        dateFormat: 'Y-m-d H:i',
        time_24hr: false,
        timeFormat: 'H:i',
    };
    data: Array<{ id: number; type: string; }> = [];
    venueList = [
        {
            id: 1,
            venue: 'Belmont',
        },
        {
            id: 2,
            venue: 'Philippines',
        },
    ];
    Venue = 1;

    get multiType() {
        return racingStore.multiType;
    }

    set multiType(selected) {
        racingStore.setMultiType(selected);
    }

    // Lifecycle hook
    mounted() {

        this.data = [
            {
                id: 1,
                type: 'Pick a Winner',
            },
            {
                id: 2,
                type: 'Superfecta',
            },
        ];
    }

    // Component method
}
