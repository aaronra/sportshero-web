<template>
    <section id="SportsMultiBetsFilters">
        <div class="is-flex is-justify-content-flex-end" v-if="multiType === 3">
            <button class="add-team button is-primary is-outlined p-x-25 is-rounded" @click="isCardModalActive=true">
                Add Team
            </button>
        </div>
        <div class="columns is-multiline">
            <div class="column is-one-third">
                <b-field horizontal label="Multi name:">
                    <b-input placeholder="Type name"></b-input>
                </b-field>
            </div>
            <div class="column is-one-third">
                <b-field horizontal label="Close Betting:">
                    <p class="control has-icons-right">
                        <flat-pickr name="dateTimeFrom"
                                    placeholder="Select Date and Time"
                                    :config="config"
                                    editable
                                    class="input"
                                    v-model="closeBetting"
                        ></flat-pickr>
                        <span class="icon is-small is-right">
                            <i class="far fa-calendar-alt"></i>
                        </span>
                    </p>
                </b-field>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column is-one-third">
                <b-field horizontal label="Release Time:">
                    <p class="control has-icons-right">
                        <flat-pickr name="dateTimeFrom"
                                    placeholder="Select Date and Time"
                                    :config="config"
                                    editable
                                    class="input"
                                    v-model="releaseTime"
                        ></flat-pickr>
                        <span class="icon is-small is-right">
                            <i class="far fa-calendar-alt"></i>
                        </span>
                    </p>
                </b-field>
            </div>
            <div class="column is-one-third">
                <b-field horizontal label="Sports:">
                    <b-select placeholder="Select Sports" v-model="selectedSport" expanded>
                        <option
                                v-for="option in sportsList"
                                :value="option"
                                :key="option.id">
                            {{ option.sport }}
                        </option>
                    </b-select>
                </b-field>
            </div>

        </div>
        <div class="columns is-multiline">
            <div class="column is-one-third">
                <b-field horizontal label="Type of Multi:">
                    <b-select placeholder="Select Type" v-model="multiType" expanded>
                        <option
                                v-for="option in data"
                                :value="option.id"
                                :key="option.id">
                            {{ option.type }}
                        </option>
                    </b-select>
                </b-field>
            </div>
            <div class="column is-one-third">
                <b-field horizontal label="Description:">
                    <b-input placeholder="Type description"></b-input>
                </b-field>
            </div>

        </div>
    </section>
</template>

<script lang="ts" src="./SportsMultiBetsFilters.ts"></script>

