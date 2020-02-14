<template>
    <section id="WinningMarginModal" class="modal-card" :class="{'wide-modal':isWideModal()}">
        <header class="modal-card-head">
            <p class="modal-card-title is-uppercase">{{sports}} - {{typeOfMulti}}</p>
            <i class="far fa-times-circle pointer" @click="$parent.close()"></i>
        </header>
        <section class="modal-card-body">
            <b-field class="m-b-30 search">
                <b-autocomplete
                        expanded
                        rounded
                        v-model="name"
                        :data="filteredDataArray()"
                        placeholder="Search"
                        icon="magnify"
                        @select="option => selected = option">
                    <template slot="empty">No results found</template>
                </b-autocomplete>
            </b-field>

            <div class="m-x--20">
                <ul class="list is-radiusless">
                    <li v-for="game in gameList" class="list-item p-0">
                        <div class="columns is-multiline is-marginless">
                            <div class="column is-2 is-flex is-align-item-center">
                                <div class="field">
                                    <b-checkbox v-model="selectedGames"
                                                :native-value="game" class="is-size-6">
                                        {{game.game}}
                                    </b-checkbox>
                                </div>
                            </div>
                            <div class="column is-flex is-align-item-center is-justify-content-center p-0">
                                <section class="is-flex is-align-item-center is-justify-content-center">
                                    <div>
                                        <div class="is-flex is-align-item-center">
                                            <div class="image is-32x32 m-x-5">
                                                <img class="is-rounded" :src="game.avatar">
                                            </div>
                                            <div class="has-text-black is-size-6">{{game.team1}}</div>
                                        </div>
                                        <div v-if="multiType===1"
                                             class="m-b-5 is-flex is-align-item-center is-justify-content-center">
                                            <div class="pointer m-x-10" @click="isCardModalActive = true">
                                                <i class="fal fa-plus-circle has-text-grey"></i></div>
                                            <div class="is-flex has-text-centered">
                                                <span class="box bet-margin is-justify-content-center">1-4</span>
                                            </div>
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
                                        <div v-if="multiType===1"
                                             class="m-b-5 is-flex is-align-item-center is-justify-content-center">
                                            <div class="pointer m-x-10" @click="isCardModalActive = true">
                                                <i class="fal fa-plus-circle has-text-grey"></i></div>
                                            <div class="is-flex has-text-centered">
                                                <span class="box bet-margin">1-4</span>
                                            </div>

                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div class="column is-2" v-if="multiType===2">
                                <div class="field">
                                    <input class="input" value="-200"/>
                                </div>
                            </div>
                            <div class="column is-2" v-if="multiType===2">
                                <b-field>
                                    <b-select placeholder="Select" value="Under" expanded>
                                        <option>
                                            Under
                                        </option>
                                        <option>
                                            Over
                                        </option>
                                    </b-select>
                                </b-field>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <p class="m-t-10 is-size-6 has-text-grey-light">Number of Game: {{numberOfGame}}</p>
        </section>
        <footer class="modal-card-foot is-flex is-justify-content-flex-end">
            <div class="field is-grouped">
                <p class="control">
                    <a @click="$parent.close()" class="button is-cancel is-rounded is-uppercase p-x-50">
                        cancel
                    </a></p>
                <p class="control"><a class="button is-primary is-rounded is-uppercase p-x-50">
                    add
                </a></p></div>
        </footer>
    </section>
</template>

<script lang="ts" src="./MultiTypeAddModal.ts"></script>
