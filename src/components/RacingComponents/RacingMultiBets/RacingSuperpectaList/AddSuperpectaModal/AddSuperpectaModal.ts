import {Component, Vue} from 'vue-property-decorator';

@Component({
    name: 'AddSuperpectaModal',
    components: {},
})
export default class AddSuperpectaModal extends Vue {
    // Component Props

    // Data property
    data = [
        'Grafton, NSW',
        'Belton',
    ];
    racerList = [
        {
            avatar: 'https://bulma.io/images/placeholders/32x32.png',
            name: 'ALLZIN (8)',
            J: 'Matthew Mcguren 59.5kg',
            T: 'MS J Graham',
        },
        {
            avatar: 'https://bulma.io/images/placeholders/32x32.png',
            name: 'ALLZIN (8)',
            J: 'Matthew Mcguren 59.5kg',
            T: 'MS J Graham',
        },
        {
            avatar: 'https://bulma.io/images/placeholders/32x32.png',
            name: 'ALLZIN (8)',
            J: 'Matthew Mcguren 59.5kg',
            T: 'MS J Graham',
        },
        {
            avatar: 'https://bulma.io/images/placeholders/32x32.png',
            name: 'ALLZIN (8)',
            J: 'Matthew Mcguren 59.5kg',
            T: 'MS J Graham',
        },
        {
            avatar: 'https://bulma.io/images/placeholders/32x32.png',
            name: 'ALLZIN (8)',
            J: 'Matthew Mcguren 59.5kg',
            T: 'MS J Graham',
        },
        {
            avatar: 'https://bulma.io/images/placeholders/32x32.png',
            name: 'ALLZIN (8)',
            J: 'Matthew Mcguren 59.5kg',
            T: 'MS J Graham',
        },
        {
            avatar: 'https://bulma.io/images/placeholders/32x32.png',
            name: 'ALLZIN (8)',
            J: 'Matthew Mcguren 59.5kg',
            T: 'MS J Graham',
        },
        {
            avatar: 'https://bulma.io/images/placeholders/32x32.png',
            name: 'ALLZIN (8)',
            J: 'Matthew Mcguren 59.5kg',
            T: 'MS J Graham',
        },
        {
            avatar: 'https://bulma.io/images/placeholders/32x32.png',
            name: 'ALLZIN (8)',
            J: 'Matthew Mcguren 59.5kg',
            T: 'MS J Graham',
        },
        {
            avatar: 'https://bulma.io/images/placeholders/32x32.png',
            name: 'ALLZIN (8)',
            J: 'Matthew Mcguren 59.5kg',
            T: 'MS J Graham',
        },
    ];
    raceGroup = 'Race 1';
    raceCount = [
        'Race 1',
        'Race 2',
        'Race 3',
        'Race 4',
        'Race 5',
        'Race 6',
        'Race 7',
        'Race 8',
        'Race 9',
        'Race 10',
    ];
    name = '';
    selected = null;
    // Lifecycle hook

    // Component method
    filteredDataArray() {
        return this.data.filter((option) => {
            return option
                .toString()
                .toLowerCase()
                .indexOf(this.name.toLowerCase()) >= 0;
        });
    }
}
