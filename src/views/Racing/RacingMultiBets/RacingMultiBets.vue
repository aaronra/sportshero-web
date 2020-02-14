<template>
    <section id="RacingMultiBets" class="card">
        <div class="is-flex is-justify-content-flex-start p-10">
            <router-link :to="{name:'Racing'}" class="is-size-6">
                <i class="fas fa-chevron-left"></i> Back
            </router-link>
        </div>
        <div class="card-content p-x-15 p-t-5">
            <div class="is-flex is-justify-content-flex-end">
                <router-link :to="{name:'Racing.MultiBets'}" class="is-size-6">
                    <i class="fal fa-edit p-x-5"></i> Edit
                </router-link>
            </div>
            <RacingMultiBetsFilters/>
            <div class="m-y-50">
                <template v-if="multiType === 1">
                    <RacingMultiBetsPickTheWinnerList/>
                </template>
                <template v-else>
                    <hr class="horizontal-divider"/>
                    <div class="columns is-gapless is-multiline">
                        <div class="p-t-30 p-x-30">
                            <b-tooltip label="Add Runner" position="is-top" size="is-medium">
                        <span class="pointer" @click="isCardModalActive = true"><i
                                class="fal fa-plus-circle"></i></span>
                            </b-tooltip>
                        </div>
                        <div class="column">
                            <RacingSuperpectaList/>
                        </div>
                    </div>
                </template>
            </div>
            <div class="field is-grouped is-justify-content-flex-end">
                <p class="control">
                    <a class="button is-default is-rounded p-x-50">
                        SAVE
                    </a>
                </p>
                <p class="control">
                    <a class="button is-primary is-rounded p-x-50">
                        PUBLISH
                    </a>
                </p>
            </div>
        </div>
        <b-modal :active.sync="isCardModalActive" has-modal-card scroll="keep" :can-cancel="false">
            <AddSuperpectaModal/>
        </b-modal>
    </section>
</template>

<script lang="ts" src="./RacingMultiBets.ts"></script>

