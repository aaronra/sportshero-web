<template>
    <section id="login" class="has-text-centered">
        <figure class="m-b-45">
            <img src="@/assets/SportsHeroLogo_black.png" class="logo is-center"/>
        </figure>
        <div class="field m-b-20">
            <div class="control">
                <input class="input is-medium" v-model="email" name="username"
                       type="text"
                       placeholder="Admin Login">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input is-medium" v-model="password" name="password"
                       type="password"
                       @keyup.enter="login()"
                       placeholder="Admin Password">
            </div>
        </div>
        <!--<router-link to="/ForgotPassword"
                     class="is-pulled-right has-text-link is-size-6 m-b-40">
            Forgot Password?
        </router-link>-->
        <button @click="login()"
                class="is-rounded button is-primary is-medium is-fullwidth m-b-50">
            LOG IN
        </button>
        <p class="is-size-6  m-b-10">Internal use only.<br/> Access is restricted to authorised SportsHero personnel
            only. Do
            not attempt to get unauthorised access, or risk prosecution.</p>
        <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="false"></b-loading>
    </section>
</template>


<script lang="ts" src="./Login.ts"></script>
