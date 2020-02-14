<template>
    <section id="RacingMultiBetsFilters">
        <div class="columns is-multiline">
            <div class="column is-one-third">
                <b-field horizontal label="Multi name:">
                    <b-input placeholder="Type name"></b-input>
                </b-field>
            </div>
            <div class="column is-one-third">
                <b-field horizontal custom-class="is-size-7">
                    <p class="control has-icons-right">
                        <flat-pickr name="dateTimeFrom"
                                    placeholder="Select Date and Time"
                                    :config="config"
                                    editable
                                    class="input"
                                    v-model="startTime"
                        ></flat-pickr>
                        <span class="icon is-small is-right">
                            <i class="far fa-calendar-alt"></i>
                        </span>
                    </p>
                    <template slot="label">
                        <p>Confirm first</p>
                        <p>Game start time:</p>
                    </template>
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
                <b-field horizontal label="Venue:">
                    <b-select v-model="Venue" expanded>
                        <option
                                v-for="option in venueList"
                                :value="option.id"
                                :key="option.id">
                            {{ option.venue }}
                        </option>
                    </b-select>
                </b-field>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column is-one-third">
                <b-field horizontal label="Description:">
                    <b-input placeholder="Type description"></b-input>
                </b-field>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./RacingMultiBetsFilters.ts"></script>

