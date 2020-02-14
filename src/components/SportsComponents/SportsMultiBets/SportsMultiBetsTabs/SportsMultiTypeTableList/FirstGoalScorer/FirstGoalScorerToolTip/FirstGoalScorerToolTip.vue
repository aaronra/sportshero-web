<template>
    <section id="FirstGoalScorerToolTip">
        <h6 class="has-text-centered is-size-6 m-b-10">SOCCER</h6>
        <section class="is-flex is-align-item-center is-justify-content-center">
            <div class="is-flex is-align-item-center">
                <div class="image is-32x32 m-x-5">
                    <img class="is-rounded" :src="team.avatar">
                </div>
                <div class="has-text-black is-size-6">{{team.team1}}</div>
            </div>
            <div class="m-x-20">
                <p class="has-text-grey is-size-6">vs</p>
            </div>
            <div class="is-flex is-align-item-center">
                <div class="image is-32x32 m-x-5 ">
                    <img class="is-rounded" :src="team.avatar">
                </div>
                <div class="has-text-black is-size-6">{{team.team2}}</div>
            </div>
        </section>
        <h6 class="has-text-centered is-size-6 m-y-10">7:30 PM ET</h6>
        <hr class="horizontal-divider"/>
        <div class="columns is-multiline">
            <div class="column player-list has-border-right">
                <ul class="p-x-20">
                    <li v-for="player in teamPlayers[0].playerList" class=" m-b-5"> {{player.firstName}}
                        {{player.lastName}}
                    </li>
                </ul>
            </div>
            <div class="column player-list">
                <ul class="p-x-20">
                    <li v-for="player in teamPlayers[1].playerList" class=" m-b-5"><p>{{player.firstName}}
                        {{player.lastName}}</p></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./FirstGoalScorerToolTip.ts"></script>


