<template>
    <section id="GuildProfileInfo">
        <div class="is-flex is-justify-content-flex-end">
            <a class="is-size-6" @click="toggleEditMode()">
                <i class="is-size-6 fal fa-edit p-x-5"></i> Edit Profile
            </a>
        </div>
        <div class="columns">
            <div class="column is-marginless is-3 is-justify-content-flex-end is-flex-tablet">
                <figure class="image is-96x96 m-0">
                    <img src="https://bulma.io/images/placeholders/96x96.png" class="is-rounded">
                </figure>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column">
                <b-field horizontal label="Guild Name:">
                    <p>{{guildInfo.name}}</p>
                </b-field>
                <b-field horizontal label="Active Time:">
                    <p>{{guildInfo.activeTime}}</p>
                </b-field>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column">
                <b-field horizontal class="is-align-item-baseline" label="Current Members:">
                    <p>{{guildInfo.currentMembers}}</p>
                </b-field>
                <b-field horizontal class="is-align-item-baseline" label="Minimum Bet:">
                    <p>{{guildInfo.bet}} bets in Calendar month of over ${{guildInfo.amount}}</p>
                </b-field>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column">
                <b-field horizontal class="is-align-item-baseline" label="Member Limit:">
                    <p>{{guildInfo.memberLimit}}</p>
                </b-field>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column">
                <b-field horizontal class="is-align-item-baseline description" custom-class="description-label"
                         label="Description:">
                    <p>{{guildInfo.description}}</p>
                </b-field>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./GuildProfileInfo.ts"></script>
