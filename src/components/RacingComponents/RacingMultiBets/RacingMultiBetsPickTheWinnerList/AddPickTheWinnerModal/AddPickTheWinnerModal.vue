<template>
    <section id="AddPickTheWinnerModal" class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title is-uppercase">Pick A Winner</p>
            <i class="far fa-times-circle pointer" @click="$parent.close()"></i>
        </header>
        <div class="is-overflow-y-auto">
            <section class="modal-card-body">
                <b-field class="m-b-30">
                    <b-autocomplete
                            expanded
                            rounded
                            v-model="name"
                            :data="filteredDataArray()"
                            placeholder="Search Location"
                            icon="magnify"
                            @select="option => selected = option">
                        <template slot="empty">No results found</template>
                    </b-autocomplete>
                </b-field>

                <div class="columns is-gapless race-list">
                    <div class="column">
                        <ul class="race-count">
                            <li v-for="race in raceCount">
                                <div class="field">
                                    <b-checkbox v-model="selectedRace" :native-value="race">{{race}}</b-checkbox>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="column">
                        <ul class="racer-list">
                            <li v-for="(item,index) in racerList" class="leg-item is-flex is-align-item-center">

                                <div class="image is-32x32 m-x-5">
                                    <img class="is-rounded" :src="item.avatar">
                                </div>
                                <div class="is-size-7">
                                    <p class="has-text-black">{{index + 1}}. {{item.name}}</p>
                                    <p>J: {{item.J}}</p>
                                    <p>T: {{item.T}}</p>
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
                    <p class="control">
                        <a @click="addPickAWinner()" class="button is-primary is-rounded is-uppercase p-x-50">
                            add
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    </section>
</template>

<script lang="ts" src="./AddPickTheWinnerModal.ts"></script>
