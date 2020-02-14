import {Component, Vue} from 'vue-property-decorator';

@Component({
    name: 'ForgotPassword',
    components: {},
})
export default class ForgotPassword extends Vue {
    // Component Props

    // Data property

    // Lifecycle hook

    // Component method
    sendEmail() {
        this.$swal({
            type: 'success',
            title: 'Email has been sent!',
            allowOutsideClick: false,
        }).then((result) => {
            if (result.value) {
                this.$router.push({name: 'Login'});
            }
        });
    }
}
