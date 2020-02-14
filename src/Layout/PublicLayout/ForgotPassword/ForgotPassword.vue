<template>
    <section id="ForgotPassword">
        <div class="m-b-50 is-flex is-justify-content-flex-end">
            <router-link class="is-uppercase has-text-link"
                         :to="{name :'Login'}">
                Sign In
            </router-link>
        </div>
        <div class="m-b-25">
            <h4 class="title is-size-4 m-b-10">Forgot Password</h4>
            <p class="subtitle has-text-centered m-t-5">
                Enter the email address you used to create your account and we will
                email you a link to reset your password</p>
        </div>
        <div class="field m-b-35">
            <div class="control">
                <input class="input is-medium" name="username"
                       type="text"
                       placeholder="Email">
            </div>
        </div>
        <button @click="sendEmail()"
                class="is-rounded button is-primary is-medium is-fullwidth m-b-50 is-uppercase">
            Send email
        </button>
    </section>
</template>

<script lang="ts" src="./ForgotPassword.ts"></script>

