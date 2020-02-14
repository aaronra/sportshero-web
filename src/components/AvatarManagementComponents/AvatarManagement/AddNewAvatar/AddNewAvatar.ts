import {Component, Vue} from 'vue-property-decorator';
import flatPickr from 'vue-flatpickr-component';

@Component({
  name: 'AddNewAvatar',
  components: {
    flatPickr,
  },
})
export default class AddNewAvatar extends Vue {
  // Component Props

  // Data property
  avatar = {
    name: null,
    dateTime: null,
    file: null,
  };
  config = {
    enableTime: true,
    altInput: true,
    dateFormat: 'Y-m-d H:i',
    time_24hr: false,
    timeFormat: 'H:i',
  };
  // Lifecycle hook

  // Component method
}
