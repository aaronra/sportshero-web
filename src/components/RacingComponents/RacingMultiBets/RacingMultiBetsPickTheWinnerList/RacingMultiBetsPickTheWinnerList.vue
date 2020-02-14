<template>
    <section id="RacingMultiBetsPickTheWinnerList">
        <div v-if="raceDetailList.length > 0" class="leg-wrapper is-flex">
            <section class="leg-column" v-for="(list,index) in raceDetailList">
                <div class="leg-item leg-title is-size-5 is-justify-content-space-between is-flex">
                    <span class="has-text-black is-uppercase">Leg {{index + 1}}</span>
                    <b-tooltip label="Add Runner" position="is-left" size="is-medium">
                        <span class="pointer" @click="isCardModalActive = true"><i
                                class="fal fa-plus-circle"></i></span>
                    </b-tooltip>
                </div>

                <section class="leg-item-wrapper">
                    <div class="leg-item is-flex is-align-item-center" v-for="(item,index) in list">
                        <div class="image is-32x32 m-x-5">
                            <img class="is-rounded" :src="item.avatar">
                        </div>
                        <div class="is-size-7">
                            <p class="has-text-black">{{index + 1}}. {{item.name}}</p>
                            <p>J: {{item.J}}</p>
                            <p>T: {{item.T}}</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
        <b-loading :is-full-page="false" :active="true" :can-cancel="false" v-else></b-loading>
        <b-modal :active.sync="isCardModalActive" has-modal-card scroll="keep" :can-cancel="false">
            <AddPickTheWinnerModal @closeModal="closeModal()"/>
        </b-modal>
    </section>
</template>

<script lang="ts" src="./RacingMultiBetsPickTheWinnerList.ts"></script>
