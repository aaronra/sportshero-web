<template>
    <section id="EditGameModal" class="modal-card">
        <header class="modal-card-head">
            <div class="column p-0">
                <i class="far fa-times-circle is-size-6 pointer has-text-grey-light" @click="$parent.close()"></i>
                <section class="is-flex is-align-item-center is-justify-content-space-between">
                    <div>
                        <div class="is-flex is-align-item-center">
                            <div class="image is-32x32 m-x-5">
                                <img class="is-rounded" :src="game.avatar">
                            </div>
                            <div class="has-text-black is-size-6">{{game.team1}}</div>
                        </div>
                    </div>

                    <div class="m-x-20 is-size-6 has-text-grey">
                        vs
                    </div>
                    <div>
                        <div class="is-flex is-align-item-center">
                            <div class="image is-32x32 m-x-5 ">
                                <img class="is-rounded" :src="game.avatar">
                            </div>
                            <div class="has-text-black is-size-6">{{game.team2}}</div>
                        </div>
                    </div>
                </section>
            </div>

        </header>
        <section class="modal-card-body">
            <div class="columns is-multiline">
                <div class="column player-list has-border-right">
                    <ul>
                        <li v-for="player in teamPlayers[0].playerList" class="p-0">
                            <div class="column is-flex is-align-item-center">
                                <div class="field">
                                    <b-checkbox v-model="selectedTeamPlayers[0].playerList"
                                                :native-value="player" class="is-size-6">
                                        {{player.firstName}} {{player.lastName}}
                                    </b-checkbox>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="column player-list">
                    <ul>
                        <li v-for="player in teamPlayers[1].playerList" class="p-0">
                            <div class="column is-flex is-align-item-center">
                                <div class="field">
                                    <b-checkbox v-model="selectedTeamPlayers[1].playerList"
                                                :native-value="player" class="is-size-6">
                                        {{player.firstName}} {{player.lastName}}
                                    </b-checkbox>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <footer class="modal-card-foot is-flex is-justify-content-flex-end">
            <div class="field is-grouped">
                <p class="control">
                    <a @click="$parent.close()" class="button is-cancel is-rounded is-uppercase p-x-50">
                        cancel
                    </a></p>
                <p class="control"><a class="button is-primary is-rounded is-uppercase p-x-50">
                    done
                </a></p></div>
        </footer>

    </section>
</template>

<script lang="ts" src="./EditGameModal.ts"></script>
